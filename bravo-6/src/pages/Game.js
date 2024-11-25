import "./Game.css";
import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { Outlet, Link } from "react-router-dom";

import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { CalculateWinLoss, ProvideWinLossFeedback } from "../Utils/GameLogic";

//grid created for testing
const Sept = {1:"ni'n",2 :"ki'l",3:"teluisi"}
const Octo = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm"}
const Nov = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey"}
const Dec = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey"}
const Jan = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm"}
const Feb = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul"}
const Mar = {1:"ni'n",2 :"ki'l",3:"teluisi",4:"aqq",5:"mijisi",6:"wiktm",7:"kesalk",8:"l'tu",9:"eliey",10:"nemitu",11:"kesatm",12:"wejiey",13:"ta'ta",14:"kiju",15:"nekm",16:"ala'tu",17:"ula",18:"kesalul",19:"welta'si",20:"wen",21:"net"}

function Game() {
  const [words, setWords] = useState(Sept);
  
  const [playerChosenImage, setPlayerChosenImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [winCounter, setWinCounter] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

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
        console.log("sept");
        break;
      case 1:
        newWords = Octo;
        console.log("oct");
        break;
      case 2:
        newWords = Nov;
        console.log("nov");
        break;
      case 3:
        newWords = Dec;
        console.log("dec");
        break;
      case 4:
        newWords = Jan;
        console.log("jan");
        break;
      case 5:
        newWords = Feb;
        console.log("feb");
        break;
      case 6:
        newWords = Mar;
        console.log("mar");
        break;
      default:
        newWords = Sept; // Default to September
        console.log("sept")
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
            <h1 className="font-bold text-2xl">{words[targetImage]}</h1>
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
            <GameGrid  />
          </div>
        </div>
        </div>
      </DndContext>
    </>
  );
}

export default Game;
