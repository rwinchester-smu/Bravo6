import ImageTile from './ImageTile';

// Maps out droppable ImageTiles into a 3 col grid, based on an array of image 
// objects. 
// Author: Riley Winchester
const GameGrid = ({words}) => {
    //returns the array mapped into a grid 
    return (
        <div className = "grid grid-cols-3 gap-4 p-4" data-cy="game-grid">
            {words.map(({image, id}, index) => (
                <ImageTile key={index} id={id} imageSrc={image} />
            ))}
        </div>
    );
};

export default GameGrid;