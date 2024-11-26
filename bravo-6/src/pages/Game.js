import "./Game.css";
import { DndContext } from "@dnd-kit/core";
import { Outlet, Link } from "react-router-dom";
import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { CalculateWinLoss, ProvideWinLossFeedback } from "../Utils/GameLogic";
import { useState, useEffect } from "react";
import Sound from '../Components/Sound';
import soundImage from '../images/soundimage.png';

//map words to audios
const audioFiles = {
  "ala'tu": "/audio/alatu.wav",
  "aqq": "/audio/aqq.wav",
  "eliey": "/audio/eliey.wav",
  "kelulktelatekn": "/audio/kelulktelatekn.wav",
  "kesalk": "/audio/kesalk.wav",
  "kesalul": "/audio/kesalul.wav",
  "kesatm": "/audio/kesatm.wav",
  "kiju": "/audio/kiju.wav",
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

//grid created for testing
const Sept = {1:"ni'n",2 :"ki'l",3:"teluisi"}
const Octo = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm"}
const Nov = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey"}
const Dec = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey"}
const Jan = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm"}
const Feb = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul"}
const Mar = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul",19:"welta'si",20:"wen",21:"net"}

function Game() {
  //audio files
  const [currentWord, setCurrentWord] = useState("alatu");
  const [playAudio, setPlayAudio] = useState(null);

  const [words, setWords] = useState(Sept);
  
  const [playerChosenImage, setPlayerChosenImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

  const playWordAudio = (word) => {
    if (audioFiles[word]) {
      console.log(`Playing audio: ${audioFiles[word]}`);
      const audio = new Audio(audioFiles[word]);
      audio.onerror = (e) => {
        console.error(`Error loading audio file for word: ${word}`, e);
      };
      audio.play();
    } else {
      console.error(`Audio file for word: ${word} not found`);
    }
  };
  

  const chooseTargetImage = () => {
    //Behavior for testing purposes when no more words remain. 
    if (usedWords.length === Object.keys(words).length) {
      alert("All words used! Please select a new month.");
      setUsedWords([]);
      setPlayerChosenImage(null)
      setWinCounter(0)
      return;
    }

    let maxKey = Object.keys(words).length;
    let randomKey;
    do {
      randomKey = Math.floor(Math.random() * maxKey) + 1;
    } while (usedWords.some(word => word === randomKey));

    setTargetImage(randomKey);
  };

  useEffect(() => {
    chooseTargetImage();
  }, [usedWords]);

  function addWords(event) {
    let month = Number(event.target.value);
    let newWords;

    switch (month) {
      case 0:
        newWords = Sept;
        break;
      case 1:
        newWords = Octo;
        break;
      case 2:
        newWords = Nov;
        break;
      case 3:
        newWords = Dec;
        break;
      case 4:
        newWords = Jan;
        break;
      case 5:
        newWords = Feb;
        break;
      case 6:
        newWords = Mar;
        break;
      default:
        newWords = Sept; // Default to September
    }

    setWords(newWords);
    setUsedWords([]);
    setPlayerChosenImage(null)
    setWinCounter(0)
  }

  const handleDragEnd = (event) => {
    debugger;
    if (event.over !== null) {
      setPlayerChosenImage(event.over.id)
      if (!usedWords.some(word => word === targetImage)) {
        setUsedWords(prevUsedWords => [...prevUsedWords, targetImage]);
      }

      let isWin = CalculateWinLoss(event.over.id, targetImage)
      if (isWin) {
        setWinCounter(winCounter => winCounter + 1)
        debugger;
      }

      ProvideWinLossFeedback(isWin)
    }
  }

  return (
    <>
    <div>
      <select onChange={addWords}>
        <option value={0}>Wikumkewiku's	(September)</option>
        <option value={1}>Wikewiku's (October)</option>
        <option value={2}>Keptekewiku's (November)</option>
        <option value={3}>Kesikewiku's (December)</option>
        <option value={4}>Punamujuiku's (January)</option>
        <option value={5}>Apuknajit (Febuary)</option>
        <option value={6}>Si'ko'ku's (March)</option>

      </select>

      <Link className="flex flex-col-reverse" to={"/Dictionary"}>
        <button className="" type="button">
          Dictionary
        </button>
      </Link>
      </div>

      {/* Contains draggable and droppable elements */}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center">
          {/* Word and sound image container */}
          <div className="word-container">
            <h1 className="font-bold text-2xl">{words[targetImage]}</h1>
            <img
              src={soundImage}
              alt="Sound"
              className="sound-image"
              onClick={() => playWordAudio(words[targetImage])}
              />
            </div>
        <div className="flex flex-col lg:flex-row mx-auto items-center lg:justify-center w-full h-screen p-4 box-border">
          <div className="flex flex-col items-center lg:items-end lg:mr-8 mb-4 lg:mb-0">
            <h1 className="flex flex-row mb-2 text-center">
              Chosen image: {playerChosenImage} <br />
              Win Counter: {winCounter}
            </h1>
            {/* Draggable bearpaw */}
            <BearPaw />
          </div>

          <div className="flex items-center justify-center">
            {/* Grid of droppable images */}
            <GameGrid />
          </div>
        </div>
        </div>
      </DndContext>

      {playAudio && <Sound src={playAudio} play />}

    </>
  );
}

export default Game;