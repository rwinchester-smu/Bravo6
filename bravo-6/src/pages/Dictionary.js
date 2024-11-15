import React, { useState } from 'react';
import './Dictionary.css';
import wordsData from '../Components/wordsData.js';

// function for the dictionary
const Dictionary=()=>{
  // manages which word is currently expanded using useState Hook
  const [expandedWord,setExpandedWord]=useState(null);
  
  // toggle expanded word
  const toggleExpand=(word)=>{
    // ternary operator to close word if expanded, expand it otherwise
    setExpandedWord(expandedWord===word ? null : word);
  };

  // return value
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-lg Dictionary">
      <h1 className="text-2xl font-semibold text-center mb-4">dictionary</h1>
      <ul>
        {wordsData.map((item,index) => (
          <li key={item.word} onClick={()=>toggleExpand(item.word)} className={`p-4 bg-white cursor-pointer transition-all duration-300`}>
            <div className="flex items-center justify-between">
              <strong className="text-3xl">{item.word}</strong>
            </div>
            {expandedWord===item.word && (
              <div className="mt-3 space-y-3 transition-all duration-300 ease-in-out">
                <p className="text-gray-700">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.word}
                  className="w-full h-auto rounded-lg"/>
                <audio controls className="w-full">
                  <source src={item.audio} type="audio/wav"/>
                </audio>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dictionary;

// programmed by cohen creighton

