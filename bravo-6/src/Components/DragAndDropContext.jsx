import React, {useState} from "react";
import { DndContext } from '@dnd-kit/core'

import BearPaw from "./BearPaw";
import GameGrid from './GameGrid'

const DragAndDropContext = () => {  
    const [chosenImage, setChosenImage] = useState(null);
    
    const handleSelect = (id) => {
        console.log(id);
    }

    return (
    <DndContext>
        <div className="flex flex-col items-center">
            <BearPaw /> 
            <GameGrid onSelect={handleSelect}/>
        </div>
    </DndContext>
    )
}

export default DragAndDropContext;