import "../App.css";
import { useState } from "react";

import GameGrid from "../Components/GameGrid";
import BearPaw from "../Components/BearPaw";
import { DndContext } from "@dnd-kit/core";
import DragAndDropContext from "../Components/DragAndDropContext";

function Game() {
  const [chosenImage, setChosenImage] = useState(null);

  const handleSelect = (id) => {
    setChosenImage(id);
  };

  const handleDragEnd = (event) => {
    const { over } = event;
    if (over) {
      handleSelect(event.over.id);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col lg:flex-row mx-auto items-center lg:justify-center w-full h-screen p-4 box-border">
        {/* Bear Paw section, placed above grid on mobile and to the left on desktop */}
        <div className="flex flex-col items-center lg:items-end lg:mr-8 mb-4 lg:mb-0">
          <h1 className="mb-2 text-center">Chosen image: {chosenImage}</h1>
          <BearPaw />
        </div>

        {/* Game Grid, centered below Bear Paw on mobile and beside it on desktop */}
        <div className="flex items-center justify-center">
          <GameGrid onSelect={handleSelect} />
        </div>
      </div>
    </DndContext>
  );
}

export default Game;
