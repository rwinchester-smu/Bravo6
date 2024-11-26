// import React, { useState } from "react";
// import ImageTile from './ImageTile';
// import Layout from "../pages/Layout";

// const GameGrid = ({onSelect}) => {
//     const [gridItems, setGridItems] = useState([
//         {id: 1, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHclVZgbbe4W2pIyuqctXzdnvqYn7QWgyW5Q&s'},
//         {id: 2, imageSrc: 'https://static.vecteezy.com/system/resources/previews/030/690/815/non_2x/people-hugging-2d-cartoon-illustraton-on-white-background-free-photo.jpg'},
//         {id: 3, imageSrc: 'https://www.pngkey.com/png/detail/48-481838_cartoon-of-two-kids-building-a-model-of.png'},
//         {id: 4, imageSrc: 'https://t4.ftcdn.net/jpg/06/75/51/73/360_F_675517329_MOKEsALODXsNrKDQBOLzA4mcMkPcQbZp.jpg'},
//         {id: 5, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8lX8EzkNvPvDjx9yR1vC1ygKdi5fuKX4Wg&s'},
//         {id: 6, imageSrc: 'https://placehold.co/200'},
//         {id: 7, imageSrc: 'https://img.freepik.com/premium-photo/cute-grandmother-folk-costume-with-floral-ornament-flat-simple-illustration-decorative_890415-130.jpg?w=740'},
//         {id: 8, imageSrc: 'https://img.freepik.com/premium-vector/boy-with-backpack-goes-school_1296426-2786.jpg'},
//         {id: 9, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcXlyRXhLdOgs2Op5Ksn8_FaiINszMqrphw&s'}
//     ]) 

//     //return (
//       //  <div className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//         //    {gridItems.map(({id, imageSrc}) => (
//           //      <ImageTile key ={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
//           //  ))}
//        // </div>
//         /* use lg */
//    // );
//    //making the grid three column no matter the page size
//    return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//         {gridItems.map(({ id, imageSrc }) => (
//             <ImageTile key={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
//         ))}
//     </div>
// );
// };

// export default GameGrid;

import { useState, useEffect } from 'react';
import ImageTile from './ImageTile';
import Layout from "../pages/Layout";

const GameGrid = ({ onSelect }) => {
    const [gridItems, setGridItems] = useState([
        {id: 1, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHclVZgbbe4W2pIyuqctXzdnvqYn7QWgyW5Q&s'},
        {id: 2, imageSrc: 'https://static.vecteezy.com/system/resources/previews/030/690/815/non_2x/people-hugging-2d-cartoon-illustraton-on-white-background-free-photo.jpg'},
        {id: 3, imageSrc: 'https://www.pngkey.com/png/detail/48-481838_cartoon-of-two-kids-building-a-model-of.png'},
        {id: 4, imageSrc: 'https://t4.ftcdn.net/jpg/06/75/51/73/360_F_675517329_MOKEsALODXsNrKDQBOLzA4mcMkPcQbZp.jpg'},
        {id: 5, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8lX8EzkNvPvDjx9yR1vC1ygKdi5fuKX4Wg&s'},
        {id: 6, imageSrc: 'Images/I am Happy.jpeg'},
        {id: 7, imageSrc: 'https://img.freepik.com/premium-photo/cute-grandmother-folk-costume-with-floral-ornament-flat-simple-illustration-decorative_890415-130.jpg?w=740'},
        {id: 8, imageSrc: 'https://img.freepik.com/premium-vector/boy-with-backpack-goes-school_1296426-2786.jpg'},
        {id: 9, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcXlyRXhLdOgs2Op5Ksn8_FaiINszMqrphw&s'}
    ]);


    //array for the month
    //  ({
    //     {id: 1, imageSrc: 'https://placehold.co/200'},
    //     {id: 2, imageSrc: 'https://placehold.co/200'},
    //     {id: 3, imageSrc: 'https://placehold.co/200'},
    //     {id: 4, imageSrc: 'https://placehold.co/200'},
    //     {id: 5, imageSrc: 'https://placehold.co/200'},
    //     {id: 6, imageSrc: 'https://placehold.co/200'},
    //     {id: 7, imageSrc: 'https://placehold.co/200'},
    //     {id: 8, imageSrc: 'https://placehold.co/200'},
    //     {id: 9, imageSrc: 'https://placehold.co/200'},
    // })

    //  ({
    //     {id: 1, imageSrc: 'https://placehold.co/200'},
    //     {id: 2, imageSrc: 'https://placehold.co/200'},
    //     {id: 3, imageSrc: 'https://placehold.co/200'},
    //     {id: 4, imageSrc: 'https://placehold.co/200'},
    //     {id: 5, imageSrc: 'https://placehold.co/200'},
    //     {id: 6, imageSrc: 'https://placehold.co/200'},
    //     {id: 7, imageSrc: 'https://placehold.co/200'},
    //     {id: 8, imageSrc: 'https://placehold.co/200'},
    //     {id: 9, imageSrc: 'https://placehold.co/200'},
    // })

    // Function to shuffle the grid items randomly
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    };

    // Shuffle the gridItems when the component mounts
    useEffect(() => {
        const shuffledItems = [...gridItems];
        shuffleArray(shuffledItems);
        setGridItems(shuffledItems);
    }, []); // Empty dependency array ensures it runs only on initial mount

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {gridItems.map(({ id, imageSrc }) => (
                <ImageTile key={id} id={id} imageSrc={imageSrc} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default GameGrid;
