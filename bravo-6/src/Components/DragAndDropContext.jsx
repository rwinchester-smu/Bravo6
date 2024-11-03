import React, {useState} from "react";
import { DndContext } from '@dnd-kit/core'

import BearPaw from "./BearPaw";
import GameGrid from './GameGrid'
//TODO: just put this in game to make it easier to incorporate logic and less confusing

const DragAndDropContext = () => {  
    const [chosenImage, setChosenImage] = useState(null);
    
    const handleSelect = (id) => {
        setChosenImage(id);
    }

    const handleDragEnd = (event) => {
        const { over } = event;
        if (over) {
            handleSelect(event.over.id)
        }
    }

    return (
    <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full justify-center">
            <div className="mr-10 p-5">
                <h1>Chosen image: {chosenImage}</h1>
                <BearPaw />
            </div>
            <div className="p-5">
                <GameGrid onSelect={handleSelect} />
            </div>
        </div>
    </DndContext>
    )
}

export default DragAndDropContext;