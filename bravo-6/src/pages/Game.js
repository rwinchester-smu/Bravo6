import "../App.css";
import { Component, useState } from "react";

import ImageTile from "../Components/ImageTile";
import BearPaw from "../Components/BearPaw";
import { DndContext } from "@dnd-kit/core";
import DragAndDropContext from "../Components/DragAndDropContext";

function Game() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <BearPaw>Drag</BearPaw>;
  return (
    // <DndContext onDragEnd={handleDragEnd}>
    //   {!isDropped ? draggableMarkup : null}
    //   <ImageTile>
    //     {isDropped ? draggableMarkup : "Drop"}
    //   </ImageTile>
    // </DndContext>
    <DragAndDropContext />
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id == "droppable") {
      setIsDropped(true);
    }
  }
}

export default Game;
