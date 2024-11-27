import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import mikmaqBearPaw from '../images/mikmaqbearpaw.png';

// Draggable item used to select from droppable grid
// Uses useDraggable hook from dndkit library, 
// see https://docs.dndkit.com/api-documentation/draggable
// Author: Riley Winchester
const BearPaw = () => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: 'draggable'
    });

    //Moves the object visually when it is dragged
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      };

    //Returns the component as an image withing a draggable div 
    return (
        <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        className={`object-fill touch-none cursor-pointer ${
            isDragging ? 'opacity-50' : 'opacity-100'
          }`}
        >
            <img src={mikmaqBearPaw} className='' />
        </div>
    );
}

export default BearPaw