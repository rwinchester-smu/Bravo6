import React from "react";
import {useDroppable} from '@dnd-kit/core'

function ImageTile({id, imageSrc, onSelect, isSelected}) {
    const {setNodeRef, isOver} = useDroppable({
        id: id, 
    });
    const handleDrop = () => {
        onSelect(id)
    }

    return (
        <div ref={setNodeRef} className={`w-200 h-200 border-2 border-gray-300 bg-gray-100 flex items-center justify-center ${isSelected ? 'border-green-500' : 'border-gray-300'} ${isOver ? 'bg-blue-200' : 'bg-gray-100'}`} onDrop={handleDrop}>
            <img src={imageSrc} className="w-full h-full object-cover"/>
        </div>
    )
}

export default ImageTile;