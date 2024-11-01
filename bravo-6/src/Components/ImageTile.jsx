import React from "react";
import {useDroppable} from '@dnd-kit/core'

function ImageTile({id, imageSrc, onSelect}) {
    const {isOver, setNodeRef} = useDroppable({
        id: id, 
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };

    const handleDrop = () => {
        onSelect(id)
    }

    return (
        <div ref={setNodeRef} style={style} onDrop={handleDrop}>
            <img src={imageSrc} className="w-full h-full object-cover"/>
        </div>
    )
}

export default ImageTile;