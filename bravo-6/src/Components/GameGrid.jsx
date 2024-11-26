import React, { useState } from "react";
import ImageTile from './ImageTile';

// Maps out droppable ImageTiles into a 3 col grid, based on an array of image 
// objects. 
// Author: Riley Winchester
const GameGrid = () => {
    const [gridItems, setGridItems] = useState([
        {id: 1, imageSrc: 'https://placehold.co/200'},
        {id: 2, imageSrc: 'https://placehold.co/200'},
        {id: 3, imageSrc: 'https://placehold.co/200'},
        {id: 4, imageSrc: 'https://placehold.co/200'},
        {id: 5, imageSrc: 'https://placehold.co/200'},
        {id: 6, imageSrc: 'https://placehold.co/200'},
        {id: 7, imageSrc: 'https://placehold.co/200'},
        {id: 8, imageSrc: 'https://placehold.co/200'},
        {id: 9, imageSrc: 'https://placehold.co/200'}
    ]) //Initialized with an array of placeholders. 
    //TODO replace current placeholder with stylized ones, and accept an prop for
    //an array of randomly selected image files

    //returns the array mapped into a grid 
    return (
        <div className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {words.map(({image, id}, index) => (
                <ImageTile key={index} id={id} imageSrc={image} />
            ))}
        </div>
    );
};

export default GameGrid;