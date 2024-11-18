import React, { useState } from 'react';

const words = [
  { word: 'alatu', audio: '/audio/alatu.wav' },
  { word: 'aqq', audio: '/audio/aqq.wav' },
  { word: 'eliey', audio: '/audio/eliey.wav' },
  { word: 'alatu', audio: '/audio/alatu.wav' },
  { word: 'kelulktelatekn', audio: '/audio/kelulktelatekn.wav' },
  { word: 'kesalk', audio: '/audio/kesalk.wav' },
  { word: 'kesalul', audio: '/audio/kesalul.wav' },
  { word: 'kesatm', audio: '/audio/kesatm.wav' },
  { word: 'kiju', audio: '/audio/kiju.wav' },
  { word: 'kil', audio: '/audio/kil.wav' },
  { word: 'kjinukwalsiap', audio: '/audio/kjinukwalsiap.wav' },
  { word: 'ltu', audio: '/audio/ltu.wav' },
  { word: 'mijisi', audio: '/audio/mijisi.wav' },
  { word: 'nemitu', audio: '/audio/nemitu.wav' },
  { word: 'nin', audio: '/audio/nin.wav' },
  { word: 'tata', audio: '/audio/tata.wav' },
  { word: 'teluisi', audio: '/audio/teluisi.wav' },
  { word: 'ula', audio: '/audio/ula.wav' },
  { word: 'wejiey', audio: '/audio/wejiey.wav' },
  { word: 'weltasi', audio: '/audio/weltasi.wav' },
  { word: 'wiktm', audio: '/audio/wiktm.wav' },
];

//stop audio when other audio starts
function Game() {
  const [audio, setAudio] = useState(null);

  const handleWordClick = (url) => {
      if (audio) {
          audio.pause();
      }
      const newAudio = new Audio(url);
      setAudio(newAudio);
      newAudio.play();
  };

  //list words for now - click for sound
  return (
      <div>
          <h1> </h1>
          <ul>
              {words.map((word, index) => (
                  <li key={index} onClick={() => handleWordClick(word.audio)}>
                      {word.word}
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default Game;