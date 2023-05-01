import { DragTarget } from "./interface";


// fügt einem Element eine CSS-Klasse namens "dragging" hinzu, 
//um es als gezogenes Element zu kennzeichnen.
const dragStart = (target: DragTarget): void => {
    target.addClass("dragging");
  };

  //wird aufgerufen, wenn der Benutzer das Element loslässt. 
// entfernt die CSS-Klasse "dragging" aus dem Element, um es nicht länger als gezogen zu markieren.
const dragEnd = (target: DragTarget): void => {
    target.removeClass("dragging");
  };

  const dragEnter = (event: DragEvent): void => {
    (event.currentTarget as HTMLElement).classList.add("drop");
  };

  
const dragLeave = (event: DragEvent): void => {
    (event.currentTarget as HTMLElement).classList.remove("drop");
  };