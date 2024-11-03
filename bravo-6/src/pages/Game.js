import "../App.css";
import { useState } from "react";

import GameGrid from '../Components/GameGrid'
import BearPaw from '../Components/BearPaw'
import { DndContext } from "@dnd-kit/core";
import DragAndDropContext from "../Components/DragAndDropContext";

function Game() {
  return (
    <div>
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
            <DragAndDropContext />
        </main>
    </div>
);
}

export default Game;
