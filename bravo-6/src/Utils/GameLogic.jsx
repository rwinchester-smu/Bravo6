//Purpose: Contains helper functions for Game.js
//Authours: Cohen Creighton, Riley Winchester

const WIN_AUDIO = new Audio('/audio/kelulktelatekn.wav');
const LOSS_AUDIO = new Audio('/audio/kjinukwalsiap.wav');

//Placeholder that is used when there isn't enough word images
const PLACEHOLDER_IMAGE = {id:99,word:"",description:"", image:"https://fakeimg.pl/1024x1024/4ade80/4ade80?font=bebas",
audio:""}

//Params: The word id of the player selected image, and the word id of the target
// image
// Returns the result as a bool
export const CalculateWinLoss = (playerSelectedImage, targetImage) => 
{
    return (playerSelectedImage === targetImage)
}

//Params: an array of words that can be in the grid
//Shuffles the array, then selects 9. If there are not 9 words, fills the array
//with placeholders and then shuffles again. 
//Returns just the 9 words for the grid
export const GetShuffledGridWords = (gridWordsArray) => {
    let shuffledGridWords = shuffleArray(gridWordsArray).slice(0, 9);

    while (shuffledGridWords.length < 9) {
      shuffledGridWords.push(PLACEHOLDER_IMAGE)
      shuffledGridWords = shuffleArray(shuffledGridWords)
    }

    return shuffledGridWords;
} 

//Params: an array
//Shuffles the array
export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

// Params: boolean
// plays audio based on whether the player won or lost the round
// author: cohen creighton
export const PlayWinLossAudio = (isWin) => 
{
    if (isWin === true) 
    {
        WIN_AUDIO.play();
    }
    else
    {
        LOSS_AUDIO.play();
    }
}