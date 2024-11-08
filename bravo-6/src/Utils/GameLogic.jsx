export const CaluclateWinLoss = (playerSelectedImage, targetImage) => 
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
        //Play Win Audio
        //Add star
    }
    else
    {
        //Play Loss audio
    }
    //Select new word and images, cont. game
}