import { DragTarget, DragAndDropSystem } from "./interface";
import { containerAlreadydone, containerTodo, cards } from "./dom-utils";

// fügt einem Element eine CSS-Klasse namens "dragging" hinzu, 
//um es als gezogenes Element zu kennzeichnen.
//dragStart: wenn das Element zum ziehen ausgewählt wird 
const dragStart = (target: DragTarget): void => {
    target.addClass("dragging");
  };

  //dragEnd: wird aufgerufen, wenn der Benutzer das Element loslässt, wenn Ziehvorgang beendet wird
// entfernt die CSS-Klasse "dragging" aus dem Element, um es nicht länger als gezogen zu markieren.
const dragEnd = (target: DragTarget): void => {
    target.removeClass("dragging");
  };


  // "event" enthält Informationen zum auslösenden Ereignis, wie zum Beispiel welche Maustaste gedrückt wurde,
//"target" hingegen bezieht sich auf das Element, auf dem das Ereignis ausgelöst wurde.

 

//drag: wird während des Ziehvorgangs ausgelöst, Ereignis wird ausgelöst, wenn ein Element gezogen wird
//dataTransfer. Der HTML-Code des gezogenen Elements muss gespeichert werden, damit er im Drop-Handler verwendet werden kann, um das Element an der richtigen Stelle im DOM 
//zu positionieren oder zu kopieren. Beim Drag-and-Drop von Elementen wird normalerweise das gezogene Element als Kopie an die neue Stelle im DOM verschoben oder kopiert. 
//Um dies zu erreichen, muss der HTML-Code des gezogenen Elements im DataTransfer-Objekt gespeichert werden, 
//damit er von der Drop-Funktion ausgelesen und an der gewünschten Stelle im DOM eingefügt werden kann.
//Das "dataTransfer"-Objekt ist das "Gefäß", in dem die Daten während des Drag & Drop-Vorgangs gespeichert werden.

//setData:  Die "setData"-Methode ist eine Möglichkeit, diese Daten in das "Gefäß" zu schreiben, damit sie später abgerufen werden können.
// "setData" wird verwendet, um den HTML-Code und die "id" des gezogenen Elements im "dataTransfer"-Objekt zu speichern. 
//Später können diese Daten dann in der "drop"-Funktion abgerufen werden, um das gezogene Element entsprechend zu manipulieren oder zu platzieren.
 
//"text/html:  gibt den Typ der Daten an, die im "dataTransfer"-Objekt gespeichert werden sollen.
//hier wird HTML-Code des gezogenen Elements als Daten übertragen. Daher wird der Typ der Daten als "text/html" angegeben, um zu signalisieren, dass es sich um HTML-Code handelt.
// der HTML-Code im "dataTransfer"-Objekt kann als formatierter Text gespeichert wird, der später wieder als HTML-Code verwendet werden kann, wenn das Element abgelegt wird.

// currentTarget: . Es ist das aktuelle HTML-Element, auf dem ein Ereignislistener registriert wurde und das das Ereignis verarbeitet. Auch wenn es andere HTML-Elemente auf der Seite gibt, 
//konzentriert sich der Ereignislistener auf das aktuelle Element, das das Ereignis verarbeitet.
const drag = (event: DragEvent): void => {
    const dataTransfer = event.dataTransfer as DataTransfer;
    dataTransfer.setData(
      "text/html",    
    (event.currentTarget as HTMLElement).outerHTML
    );

    //dataset.id wird verwendet um die id des Elements zu finden, welches gerade gezogen wird welches dann dem dataransfer übergeben wird 
    const id: string | undefined = (event.currentTarget as HTMLElement).dataset.id;
    if (id !== undefined) {
      dataTransfer.setData("text/plain", id);
    }
  };
  //drop: Ereignis wird ausgelöst, wenn ein Element auf einem gültigen Ablageziel abgelegt wird 
  function drop(event: DragEvent): void {
    const dataTransfer = event.dataTransfer as DataTransfer;
    const id: string = dataTransfer.getData("text/plain");

    //es kann entweder ein HTMLElement objekt speichren oder dne Wert null
    //querySelector:  sucht nach einem  Element im HTML-Dokument, das das Attribut data-id hat, 
    //das dem Wert der id-Variable entspricht, die aus den übergebenen Drag-and-Drop-Daten abgerufen wurde.
    // wenn kein passendes Element gefunden wurde wird 0 elementToRemove zugewiesen.
    const elementToRemove: HTMLElement | null 
    = document.querySelector(`[data-id="${id}"]`);
    

    // Die if-Anweisung überprüft, ob das Element elementToRemove existiert.
    // Wenn es existiert, wird die remove()-Methode aufgerufen, um das Element aus dem Dokument zu entfernen.
    if (elementToRemove) {
      elementToRemove.remove();
    }
    // event.preventDefault verhindert, dass der Browser eine Standardaktion für das Drop-Ereignis ausführt. 
    //Ohne diese Anweisung würde der Browser versuchen, den Inhalt der Datei anzuzeigen, die gezogen wurde.
    event.preventDefault();
    
    const target = event.target as HTMLElement;
    //Der Code sucht nach dem nächsten Element auf der Webseite, das die Klasse 'column' hat, 
    //und weist das Ergebnis dieser Suche der Variable parent zu. Dadurch kann das Ziel-Element an der richtigen Stelle in der HTML-Struktur platziert werden.
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
  