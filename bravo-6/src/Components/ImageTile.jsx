import React from "react";
import {useDroppable} from '@dnd-kit/core'

// Droppable ImageTile component that can be selected by BearPaw
// Uses useDroppable hook from dndkit library,
// see https://docs.dndkit.com/api-documentation/droppable
// Accepts props containing:
// id: Id of the image
// imageSrc: Source of the image
// Author: Riley Winchester
function ImageTile({id, imageSrc}) { //TODO: use props instead of expanding them with {}
    const {setNodeRef} = useDroppable({
        id: id, 
    });

    // Returns droppable grid containing image
    return (
        <div ref={setNodeRef} className={`w-200 h-200 border-2 border-gray-300 bg-gray-100 flex items-center justify-center`} >
            <img src={imageSrc} className="w-full h-full object-cover"/>
            <p>For testing: {id}</p>
        </div>
    )
}

export default ImageTile;