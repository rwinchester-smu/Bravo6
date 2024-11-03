import React from 'react';
import {useDraggable} from '@dnd-kit/core';

const BearPaw = () => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: 'draggable'
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      };

    return (
        <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        className={`object-fill cursor-pointer ${
            isDragging ? 'opacity-50' : 'opacity-100'
          }`}
        >
            <img src='https://placehold.co/100x100' className='' />
        </div>
    );
}

export default BearPaw