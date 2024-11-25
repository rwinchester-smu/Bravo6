import "./Game.css";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Link } from "react-router-dom";
import wordsData from '../Components/wordsData.js';
import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { CalculateWinLoss, ProvideWinLossFeedback } from "../Utils/GameLogic";

//grid created for testing
// const Sept = {1:"ni'n",2 :"ki'l",3:"teluisi"}
// const Octo = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm"}
// const Nov = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey"}
// const Dec = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey"}
// const Jan = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm"}
// const Feb = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul"}
// const Mar = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul",19:"welta'si",20:"wen",21:"net"}

// Map of months to word index ranges
const monthWordRanges = {
  0: [0, 3],   // September: wordsData[0-2]
  1: [0, 6],   // October: wordsData[0-5]
  2: [0, 9],   // November: wordsData[0-8]
  3: [0, 12],  // December: wordsData[0-11]
  4: [0, 15],  // January: wordsData[0-14]
  5: [0, 18],  // February: wordsData[0-17]
  6: [0, 21],  // March: wordsData[0-20]
};

function Game() {
  const [words, setWords] = useState(wordsData.slice(0, 3));
  const [gridWords, setGridWords] = useState([]);
  const [playerChosenImage, setPlayerChosenImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

  const chooseTargetImage = () => {
    debugger;
    let unusedIndices = words
      .map((_, index) => index)
      .filter(index => !usedWords.includes(index));

      if (unusedIndices.length === 0) {
        alert('word gone');
        resetGame();
        return;
      }

      let randomKey = unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
      setTargetImage(randomKey);
  };

  useEffect(() => {
    chooseTargetImage();
  }, [usedWords]);

  useEffect(() => {
    const [start, end] = monthWordRanges[0]; // Default to September
    const initialWords = wordsData.slice(start, end);
  
    const shuffledGridWords = shuffleArray(initialWords).slice(0, 9);
    setWords(initialWords);
    setGridWords(shuffledGridWords);
  
    // Set the target image after gridWords is populated
    if (shuffledGridWords.length > 0) {
      setTargetImage(Math.floor(Math.random() * shuffledGridWords.length));
    }
  }, []);

  function addWords(event) {
    let month = Number(event.target.value);
    let [start, end] = monthWordRanges[month] || [0, 3]
    let newWords = wordsData.slice(start, end);

    if (newWords.length === 0) {
      alert('uh oh');
      return;
    }

    setWords(newWords);
    setGridWords(shuffleArray(newWords).slice(0, 9));
    resetGame();
  }

  const resetGame = () => {
    setUsedWords([]);
    setPlayerChosenImage(null);
    setWinCounter(0);
  }

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const handleDragEnd = (event) => {
    debugger;
    if (!event.over) return;

    let selectedImageId = Number(event.over.id);

    let isWin = CalculateWinLoss(selectedImageId, (targetImage + 1));
    if (isWin) setWinCounter(prev => prev + 1);
  
    if (!usedWords.includes(targetImage)) {
      setUsedWords(prev => [...prev, targetImage]);
    }

    ProvideWinLossFeedback(isWin);
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
            <h1 className="font-bold text-2xl">{targetImage !== null ? words[targetImage].word : ""}</h1>
        <div className="flex flex-col lg:flex-row mx-auto items-center lg:justify-center w-full h-screen p-4 box-border">
          <div className="flex flex-col items-center lg:items-end lg:mr-8 mb-4 lg:mb-0">
            <h1 className="flex flex-row mb-2 text-center">
            Chosen Word: {playerChosenImage !== null ? gridWords[playerChosenImage]?.word : "None"} <br />
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
