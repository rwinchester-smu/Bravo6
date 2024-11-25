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
  const [gridWords, setGridWords] = useState(null);
  const [playerChosenImage, setPlayerChosenImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

  const chooseTargetImage = () => {
    //Behavior for testing purposes when no more words remain. 
    if (usedWords.length === words.length) {
      alert("All words used! Please select a new month.");
      setUsedWords([]);
      setPlayerChosenImage(null)
      setWinCounter(0)
      return;
    }

    let maxKey = Object.keys(words).length;
    let randomKey;
    do {
      randomKey = Math.floor(Math.random() * words.length); // Generate index within bounds
    } while (usedWords.includes(randomKey));

    setTargetImage(randomKey); // Use the valid index
  };

  useEffect(() => {
    chooseTargetImage();
  }, [usedWords]);

  function addWords(event) {
    let month = Number(event.target.value);
    let [start, end] = monthWordRanges[month] || [0, 3]
    let newWords = wordsData.slice(start, end);

    setWords(newWords);
    setGridWords(shuffleArray(newWords).slice(0, 9));
    setUsedWords([]);
    setPlayerChosenImage(null)
    setWinCounter(0)
  }

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const handleDragEnd = (event) => {
    debugger;
    if (event.over !== null) {
      setPlayerChosenImage(event.over.id)
      if (!usedWords.includes(targetImage)) {
        setUsedWords(prevUsedWords => [...prevUsedWords, targetImage]);
      }

      let isWin = CalculateWinLoss(event.over.id, gridWords[targetImage])
      if (isWin) {
        setWinCounter(winCounter => winCounter + 1)
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
            <h1 className="font-bold text-2xl">{targetImage !== null ? words[targetImage].word : ""}</h1>
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
    </>
  );
}

export default Game;
