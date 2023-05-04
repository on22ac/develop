import { DragTarget, DragAndDropSystem } from "./interface";
import { containerAlreadydone, containerTodo, cards } from "./dom-utils";

// fügt einem Element eine CSS-Klasse namens "dragging" hinzu, 
//um es als gezogenes Element zu kennzeichnen.
//wenn das Element zum ziehen ausgewählt wird 
const dragStart = (target: DragTarget): void => {
    target.addClass("dragging");
  };

  //wird aufgerufen, wenn der Benutzer das Element loslässt. 
// entfernt die CSS-Klasse "dragging" aus dem Element, um es nicht länger als gezogen zu markieren.
const dragEnd = (target: DragTarget): void => {
    target.removeClass("dragging");
  };


  // "event" enthält Informationen zum auslösenden Ereignis, wie zum Beispiel welche Maustaste gedrückt wurde,
//Das Zielobjekt "target" hingegen bezieht sich auf das Element, auf dem das Ereignis ausgelöst wurde.

  // wenn ein gezogenes Element in ein gültiges Drop-Ziel eintritt
  const dragEnter = (event: DragEvent): void => {
    (event.currentTarget as HTMLElement).classList.add("drop");
  };

  //wenn ein gezogenes Element ein Drop-Ziel verlässt 
const dragLeave = (event: DragEvent): void => {
    (event.currentTarget as HTMLElement).classList.remove("drop");
  };
//wird während des Ziehvorgangs ausgelöst
  const drag = (event: DragEvent): void => {
    const dataTransfer = event.dataTransfer as DataTransfer;
    dataTransfer.setData(
      "text/html",
      (event.currentTarget as HTMLElement).outerHTML
    );
    const id: string | undefined = (event.currentTarget as HTMLElement).dataset
      .id;
    if (id !== undefined) {
      dataTransfer.setData("text/plain", id);
    }
  };
  
  function drop(event: DragEvent): void {
    const dataTransfer = event.dataTransfer as DataTransfer;
    const id: string = dataTransfer.getData("text/plain");
    const elementToRemove: HTMLElement | null = document.querySelector(
      `[data-id="${id}"]`
    );
    
    if (elementToRemove) {
      elementToRemove.remove();
    }
    
    event.preventDefault();
    
    const target = event.target as HTMLElement;
    const parent = target.closest('.column');
    
    if (target.classList.contains("card")) {
      if (parent && elementToRemove) {
        parent.insertBefore(elementToRemove, target.nextSibling);
      }
    } else {
      if (parent) {
        parent.appendChild(elementToRemove!);
      }
    }
  }
  
  const allowDrop = (event: Event): void => {
    event.preventDefault();
  };
  
  export function addEvents() {
    containerAlreadydone.addEventListener("drop", drop);
    containerAlreadydone.addEventListener("dragover", allowDrop);
    containerTodo.addEventListener("drop", drop);
    containerTodo.addEventListener("dragover", allowDrop);
    cards.forEach((card: HTMLElement) =>
      card.addEventListener("dragstart", drag)
    );
  }
  