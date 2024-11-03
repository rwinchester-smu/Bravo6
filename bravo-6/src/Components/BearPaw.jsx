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
        className={`w-16 h-16 bg-blue-500 rounded-full cursor-pointer ${
            isDragging ? 'opacity-50' : 'opacity-100'
          }`}
        >
            <p className="text-center text-black pt-4">Drag me</p>
        </div>
    );
}

export default BearPaw