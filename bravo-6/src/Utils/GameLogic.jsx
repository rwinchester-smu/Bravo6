let winAudio = new Audio('/audio/kelulk.wav');
let lossAudio = new Audio('/audio/telatekn.wav');

export const CalculateWinLoss = (playerSelectedImage, targetImage) => 
{
    if (playerSelectedImage === targetImage)
    {
        return true;
    }
    return false;
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