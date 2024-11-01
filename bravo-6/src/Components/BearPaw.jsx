import React from 'react';
import {useDraggable} from '@dnd-kit/core';

const BearPaw = () => {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: 'draggable'
    });

    return (
        <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        >
            <p >Drag me</p>
        </div>
    );
}

export default BearPaw