import React, { useState } from "react";
import ImageTile from './ImageTile';

const GameGrid = ({onSelect}) => {
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
    ]) 

    return (
        <div className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {gridItems.map(({id, imageSrc}) => (
                <ImageTile key ={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default GameGrid;