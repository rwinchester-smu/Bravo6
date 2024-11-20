import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dictionary.css';
import wordsData from '../Components/wordsData.js';

// function for the dictionary
const Dictionary=()=>{
  // manages which word is currently expanded using useState Hook
  const [expandedWord,setExpandedWord]=useState(null);
  // navigate function
  const nav=useNavigate();
  
  // toggle expanded word
  const toggleExpand=(word)=>{
    // ternary operator to close word if expanded, expand it otherwise
    setExpandedWord(expandedWord===word ? null : word);
  };

  // return value
  return (
    // dictionary container
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-lg Dictionary">
      {/* return to game button */}
      <button onClick={()=>nav('/')} 
        className="text-black bg-white px-4 py-2 rounded-lg mb-4 ">return to game
      </button>
      <h1 className="text-2xl font-semibold text-center mb-4 mt-4">dictionary</h1>
      <ul>
        {/* map through wordsData array, create list to display */}
        {wordsData.map((item,index) => (
          <li key={item.word} onClick={()=>toggleExpand(item.word)} 
          className={`p-4 bg-white cursor-pointer transition-all duration-500`}>
            {/* container for each item */}
            <div className="flex items-center justify-between">
              <strong className="text-5xl">{item.word}</strong>
            </div>
            {/* container for expansion, conditional to open with smooth transition */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedWord===item.word ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                {/* display item contents */}
                <p className="text-gray-700 text-xl">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.word}
                  className="w-full h-auto rounded-lg"/>
                <audio controls className="w-full">
                  <source src={item.audio} type="audio/wav"/>
                </audio>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dictionary;

// programmed by cohen creighton

