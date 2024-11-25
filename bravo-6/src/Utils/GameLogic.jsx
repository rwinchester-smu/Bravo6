export const CalculateWinLoss = (playerSelectedImage, targetImage) => 
{
    debugger;
    return (playerSelectedImage === targetImage)
}

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

export const ProvideWinLossFeedback = (isWin) => 
{
    if (isWin === true) 
    {
        //Play Win Audio
        //Add star
    }
    else
    {
        //Play Loss audio
    }
}