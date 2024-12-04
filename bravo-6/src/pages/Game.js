// Purpose: Creates the game grid based on the Month Select Dropdown, and handles
// What happens on drag and drop. Handles the basic game loop.
// Authors: Cohen Creighton, Elyse Louis, Matthew Audas, Riley Winchester

import "./Game.css";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Link } from "react-router-dom";
import wordsData from '../Components/wordsData.js';
import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { CalculateWinLoss, PlayWinLossAudio, GetShuffledGridWords } from "../Utils/GameLogic";
import Sound from '../Components/Sound';
import soundImage from '../Components/soundimage.png';

//Map words to audios
const AUDIO_FILES = {
  "ala'tu": "/audio/alatu.wav",
  "aqq": "/audio/aqq.wav",
  "eliey": "/audio/eliey.wav",
  "kelulktelatekn": "/audio/kelulktelatekn.wav",
  "kesalk": "/audio/kesalk.wav",
  "kesalul": "/audio/kesalul.wav",
  "kesatm": "/audio/kesatm.wav",
  "kiju'": "/audio/kiju.wav",
  "ki'l": "/audio/kil.wav",
  "kjinukwalsiap": "/audio/kjinukwalsiap.wav",
  "l'tu": "/audio/ltu.wav",
  "mijisi": "/audio/mijisi.wav",
  "nekm": "/audio/nekm.m4a",
  "nemitu": "/audio/nemitu.wav",
  "ni'n": "/audio/nin.wav",
  "ta'ta": "/audio/tata.wav",
  "teluisi": "/audio/teluisi.wav",
  "ula": "/audio/ula.wav",
  "wejiey": "/audio/wejiey.wav",
  "welta'si": "/audio/weltasi.wav",
  "wen": "/audio/wen.m4a",
  "wiktm": "/audio/wiktm.wav"
};

//Used to reference which words belong to which months
const MONTH_TO_WORD_RANGES = {
  0: [0, 3],   
  1: [0, 6],  
  2: [0, 9],  
  3: [0, 12],  
  4: [0, 15], 
  5: [0, 18],  
  6: [0, 20], 
};

//The main game function that returns the game html
function Game() {
  const [words, setWords] = useState(wordsData.slice(0, 3));
  const [gridWords, setGridWords] = useState([]);
  const [targetWord, setTargetWord] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWordIds, setUsedWordIds] = useState([]);
  const [playAudio, setPlayAudio] = useState(null);

  //Runs on first render, sets up the game to immediately be in a September round
  //Author: Riley Winchester
  useEffect(() => {
    let [start, end] = MONTH_TO_WORD_RANGES[0];
    let initialWords = wordsData.slice(start, end);

    setWords(initialWords);
    setGridWords(GetShuffledGridWords(initialWords));
  }, []);

  //Whenever the grid is updated, choose a new target word
  //Author: Riley Wincheser
  useEffect(() => {
    ChooseTargetImage();
  }, [gridWords]);

  //Whenever a word is guessed, check if there are remaining words. If not,
  //reset the game.
  //Author: Riley Winchester
  useEffect(() => {
    if (usedWordIds.length === words.length) {
      resetGame();
    }
  }, [usedWordIds]);

  //Play audio of corresponding word and stop when done
  //Author: Elyse Louis
  const PlayWordAudio = (word) => { 
    if (AUDIO_FILES[word]) { 
      setPlayAudio(AUDIO_FILES[word]); 
      setTimeout(() => setPlayAudio(null), 1000);
    }
  };

  //Chooses the target image that the player will attempt to guess
  //Author: Riley Winchester
  const ChooseTargetImage = () => {
    if (gridWords.length === 0) return;
  
    let availibleWords = gridWords.filter(word => !usedWordIds.includes(word.id) && word.word !== "")

    let randomWord = availibleWords[Math.floor(Math.random() * availibleWords.length)];
    setTargetWord(randomWord);
  };

  //Add the correct words for the selected month whenever dropdown is used
  //The event param contains the event info from the onChange of the select
  //Author: Riley Winchester, Matthew Audas
  function addWords(event) {
    let month = Number(event.target.value);
    let [start, end] = MONTH_TO_WORD_RANGES[month] || [0, 3]
    let newWords = wordsData.slice(start, end);

    resetGame();

    setWords(newWords);
    setGridWords(GetShuffledGridWords(newWords));
  }

  //Resets the game to a new round of whatever month was selected
  //Author: Riley Winchester
  const resetGame = () => {
    setUsedWordIds([]);
    //Shows stars for an extra 2.5 seconds after game ends
    setTimeout(() => {setWinCounter(0); }, 2500);
    setGridWords(GetShuffledGridWords(words));
  }

  //Gets called when the BearPaw is dropped
  //Determines if it was a win or loss, and then increments
  //Author: Riley Winchester
  const handleDragEnd = (event) => {
    //Only continue if the bear paw was dropped over an image
    if (!event.over) return;

    let selectedWordId = Number(event.over.id);

    let isWin = CalculateWinLoss(selectedWordId, targetWord.id);
    if (isWin) setWinCounter(prev => prev + 1);
  
    if (!usedWordIds.includes(targetWord.id)) {
      setUsedWordIds(prev => [...prev, targetWord.id]);
    }

    PlayWinLossAudio(isWin);

    let shuffledGridWords = GetShuffledGridWords(words);

    setGridWords(shuffledGridWords);
  }

  return (
    <div className="overflow-hidden h-screen max-w-md mx-auto p-4 bg-blue-200 Grid">
    {/* Dropdown for selecting the month */}
    {/* author: cohen creighton */}
    <div className="bg-blue-200">
      <select onChange={addWords} className=" fixed text-blue-900 rounded-lg bg-green-400 border-2 border-pink-400 top-2 left-2 px-2 py-2">
        <option value={0}>Wikumkewiku's	(September)</option>
        <option value={1}>Wikewiku's (October)</option>
        <option value={2}>Keptekewiku's (November)</option>
        <option value={3}>Kesikewiku's (December)</option>
        <option value={4}>Punamujuiku's (January)</option>
        <option value={5}>Apuknajit (Febuary)</option>
        <option value={6}>Si'ko'ku's (March)</option>

      </select>
      {/* dictionary button */}
      {/* author: cohen creighton */}
      <Link to={"/Dictionary"}>
        <button className="text-blue-900 bg-green-400 px-2 py-2 rounded-lg fixed top-2 right-2 border-2 border-pink-400" 
        type="button">
          dictionary
        </button>
      </Link>
      {/* dedication to Angie */}
      {/* author: cohen creighton */}
      <p className="text-pink-500 text-2xl text-right px-5 mt-20 font-bold">
        mikwite'tmk+t Angie
      </p>
    </div>


      {/* Contains draggable and droppable elements */}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center bg-blue-200 min-h-screen">

        {/* Word and sound image container */}
        {/* author: Elyse Louis */}
        <div className="word-container">
          <h1 className="font-bold text-2xl text-blue-900">{targetWord?.word}</h1>
          <img
            src={soundImage}
            alt="Sound"
            className="sound-image"
            onClick={() => PlayWordAudio(targetWord?.word)}
          />
        </div> 
                
        <div className="flex flex-col lg:flex-row mx-auto items-center lg:justify-center w-full h-screen p-4 box-border">
          <div className="w-1/3 flex flex-col items-center lg:items-end lg:mr-8 mb-4 lg:mb-0">
            {/* Draggable bearpaw */}
            <BearPaw />
          </div>

          <div className="flex items-center justify-center">
            {/* Grid of droppable images */}
            <GameGrid words={gridWords}/>
          </div>
          {/* stars given to each correct guess, wrapping in case of overflow on screen */}
          {/* author: cohen creighton */}
          <div className="flex flex-wrap justify-start mt-4 w-full">
            {Array.from({length:winCounter}).map((_,index)=>(
              <img key={index} src={'/images/star.png'} alt="star" className="w-8 h-8 mx-1" />
            ))}
          </div>
        </div>
      </div>
      </DndContext>
      {playAudio && <Sound src={playAudio} play />}
    </div>
  );
}

export default Game;
