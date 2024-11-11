import React, { useState } from "react";
import ImageTile from './ImageTile';

const GameGrid = ({onSelect}) => {
    const [gridItems, setGridItems] = useState([
        {id: 1, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHclVZgbbe4W2pIyuqctXzdnvqYn7QWgyW5Q&s'},
        {id: 2, imageSrc: 'https://placehold.co/200'},
        {id: 3, imageSrc: 'https://placehold.co/200'},
        {id: 4, imageSrc: 'https://placehold.co/200'},
        {id: 5, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8lX8EzkNvPvDjx9yR1vC1ygKdi5fuKX4Wg&s'},
        {id: 6, imageSrc: 'https://placehold.co/200'},
        {id: 7, imageSrc: 'https://placehold.co/200'},
        {id: 8, imageSrc: 'https://placehold.co/200'},
        {id: 9, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcXlyRXhLdOgs2Op5Ksn8_FaiINszMqrphw&s'}
    ]) 

    //return (
      //  <div className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        //    {gridItems.map(({id, imageSrc}) => (
          //      <ImageTile key ={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
          //  ))}
       // </div>
        /* use lg */
   // );
   return (
    <div className="grid grid-cols-3 gap-4 p-4">
        {gridItems.map(({ id, imageSrc }) => (
            <ImageTile key={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
        ))}
    </div>
);
};

export default GameGrid;