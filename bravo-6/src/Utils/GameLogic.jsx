const winAudio = new Audio('/audio/kelulktelatekn.wav');
const lossAudio = new Audio('/audio/kjinukwalsiap.wav');

//Placeholder that is used when there isn't enough word images
const PLACEHOLDER_IMAGE = {id:99,word:"",description:"", image:"https://fakeimg.pl/1024x1024/4ade80/4ade80?font=bebas",
audio:""}

export const CalculateWinLoss = (playerSelectedImage, targetImage) => 
{
    return (playerSelectedImage === targetImage)
}

export const GetShuffledGridWords = (gridWordsArray) => {
    let shuffledGridWords = shuffleArray(gridWordsArray).slice(0, 9);

    while (shuffledGridWords.length < 9) {
      shuffledGridWords.push(PLACEHOLDER_IMAGE)
      shuffledGridWords = shuffleArray(shuffledGridWords)
    }

    return shuffledGridWords;
} 

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

export const PlayWinLossAudio = (isWin) => 
{
    if (isWin === true) 
    {
        winAudio.play();
    }
    else
    {
        lossAudio.play();
    }
}