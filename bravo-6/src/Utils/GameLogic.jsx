let winAudio = new Audio('/audio/kelulktelatekn.wav');
let lossAudio = new Audio('/audio/kjinukwalsiap.wav');

export const CalculateWinLoss = (playerSelectedImage, targetImage) => 
{
    return (playerSelectedImage === targetImage)
}

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

export const ProvideWinLossFeedback = (isWin) => 
{
    if (isWin === true) 
    {
        winAudio.play();
        //Play Win Audio    
        //Add star
    }
    else
    {
        lossAudio.play();
        //Play Loss audio
    }
}