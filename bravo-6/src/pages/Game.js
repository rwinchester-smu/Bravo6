import "./Game.css";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Link } from "react-router-dom";
import wordsData from '../Components/wordsData.js';
import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { CalculateWinLoss, ProvideWinLossFeedback, shuffleArray } from "../Utils/GameLogic";

// Map of months to word index ranges
const monthWordRanges = {
  0: [0, 3],   
  1: [0, 6],  
  2: [0, 9],  
  3: [0, 12],  
  4: [0, 15], 
  5: [0, 18],  
  6: [0, 21], 
};

function Game() {
  const [words, setWords] = useState(wordsData.slice(0, 3));
  const [gridWords, setGridWords] = useState([]);
  const [playerChosenImage, setPlayerChosenImage] = useState(null);
  const [targetWord, setTargetWord] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWordIds, setUsedWordIds] = useState([]);

  useEffect(() => {
    let [start, end] = monthWordRanges[0]; // Default to September
    let initialWords = wordsData.slice(start, end);
  
    let shuffledGridWords = shuffleArray(initialWords).slice(0, 9);
    setWords(initialWords);
    setGridWords(shuffledGridWords);
  }, []);

  useEffect(() => {
    chooseTargetImage();
  }, [gridWords]);

  const chooseTargetImage = () => {
    if (gridWords.length === 0) return;
  
    // Select a random word from the current grid
    let randomWord = gridWords[Math.floor(Math.random() * gridWords.length)];
    setTargetWord(randomWord);
  };

  function addWords(event) {
    let month = Number(event.target.value);
    let [start, end] = monthWordRanges[month] || [0, 3]
    let newWords = wordsData.slice(start, end);

    if (newWords.length === 0) {
      alert('uh oh'); // this whole if is for testing
      return;
    }

    let shuffledGridWords = shuffleArray(newWords).slice(0, 9);
    setWords(newWords);
    setGridWords(shuffledGridWords);

    resetGame();
  }

  const resetGame = () => {
    setUsedWordIds([]);
    setPlayerChosenImage(null);
    setWinCounter(0);
  }

  const handleDragEnd = (event) => {
    if (!event.over) return;

    let selectedWordId = Number(event.over.id);

    let isWin = CalculateWinLoss(selectedWordId, targetWord.id);
    if (isWin) setWinCounter(prev => prev + 1);
  
    if (!usedWordIds.includes(targetWord.id)) {
      setUsedWordIds(prev => [...prev, targetWord.id]);
    }

    ProvideWinLossFeedback(isWin);

    // Shuffle the grid and select a new target word
    let shuffledGridWords = shuffleArray(words).slice(0, 9);
    setGridWords(shuffledGridWords);
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

      <Link to={"/Dictionary"}>
        <button className="text-black bg-gray-100 px-2 py-2 rounded-lg mb-4 fixed top-5 right-5" 
        type="button">
          Dictionary
        </button>
      </Link>
      </div>

      {/* Contains draggable and droppable elements */}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">
          {targetWord !== null ? targetWord.word : "Loading..."}
        </h1>
        <div className="flex flex-col lg:flex-row mx-auto items-center lg:justify-center w-full h-screen p-4 box-border">
          <div className="flex flex-col items-center lg:items-end lg:mr-8 mb-4 lg:mb-0">
          <h1 className="flex flex-row mb-2 text-center">
                Chosen Word:{" "}
                {playerChosenImage !== null
                  ? gridWords[playerChosenImage]?.word
                  : "None"}{" "}
                <br />
                Win Counter: {winCounter}
              </h1>
            {/* Draggable bearpaw */}
            <BearPaw />
          </div>

          <div className="flex items-center justify-center">
            {/* Grid of droppable images */}
            <GameGrid words={gridWords}/>
          </div>
        </div>
        </div>
      </DndContext>
    </>
  );
}

export default Game;
