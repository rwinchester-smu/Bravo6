import "../App.css";
import React, { useState } from 'react';
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

  
  function addWords(event){

  if ((event.target.value) == 0) {
    setWords(Sept)
  }
  if ((event.target.value) == 1) {
    setWords(Octo)
  }
  if ((event.target.value) == 2) {
    setWords(Nov)
  }
  if ((event.target.value) == 3) {
    setWords(Dec)
  }
  if ((event.target.value) == 4) {
    setWords(Jan)
  }
  if ((event.target.value) == 5) {
    setWords(Feb)
  }
  if ((event.target.value) == 6) {
    setWords(Mar)
  }
  }
  return (

<body>
<select onChange={addWords}>
  <option value={0}>Wikumkewiku's	(September)</option>
  <option value={1}>Wikewiku's (October)</option>
  <option value={2}>Keptekewiku's (November)</option>
  <option value={3}>Kesikewiku's (December)</option>
  <option value={4}>Punamujuiku's (January)</option>
  <option value={5}>Apuknajit (Febuary)</option>
  <option value={6}>Si'ko'ku's (March)</option>

</select>
    <div class="grid">
    <div>{words[1]}</div>
    <div>{words[2]}</div>
    <div>{words[3]}</div>
    <div>{words[6]}</div>
    <div>{words[9]}</div>
    <div>{words[12]}</div>
    <div>{words[15]}</div>
    <div>{words[18]}</div>
    <div>{words[21]}</div>   
  </div>
  </body>
      );
    }

export default Game;
