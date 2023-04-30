import { DragTarget } from "./interface";


// fügt einem Element eine CSS-Klasse namens "dragging" hinzu, 
//um es als gezogenes Element zu kennzeichnen.
const dragStart = (target: DragTarget): void => {
    target.addClass("dragging");
  };