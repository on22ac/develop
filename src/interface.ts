//	Typscript spezifische codes werden hier abgelegt
//Hier stelle ich dar wie meine Listeinträge aufgebaut sind
//Das ist mein Bauplan

export interface ListEintrag {
    artikel: string;
    menge: string;
  }


  //Das DragTarget Interface definiert eine Schnittstelle, die von allen Objekten implementiert werden muss, 
//die als Ziel eines Drag & Drop-Vorgangs dienen sollen. 

//addClass:Diese Methode erwartet einen String als Parameter, der eine CSS-Klasse repräsentiert, die dem Zielobjekt hinzugefügt werden soll. 
//Das Zielobjekt soll dadurch visuell hervorgehoben werden, 
//um dem Benutzer zu signalisieren, dass das Objekt als Ziel für einen Drag & Drop-Vorgang geeignet ist.

//reomoveClass: erwartet einen String als Parameter,der eine CSS-Klasse repräsentiert, die vom Zielobjekt entfernt werden soll.
//Das Zielobjekt soll dadurch visuell zurückgesetzt werden, wenn der Drag & Drop-Vorgang abgeschlossen 
//ist oder das Objekt nicht mehr als Ziel geeignet ist.

export interface DragTarget {
  addClass(className: string): void;
  removeClass(className: string): void;
}

//beschreibt eine Art von Objekt, mit dem man arbeiten kann, wenn man Drag-and-Drop-Funktionen in einer Webanwendung implementiert. 
//ich benutze es um auf bestimmte um auf bestimmte Eigenschaften eines Elements zuzugreifen
//Das Interface erweitert ein anderes Interface namens "EventTarget", das grundlegende Funktionen für Ereignisse in Webanwendungen definiert.
// "DragEventTarget" Interface fügt dieser Basis jedoch einige zusätzliche Eigenschaften hinzu. 

// "classList"enthält eine Liste von CSS-Klassen, die einem Element zugewiesen sind. 
//Sie kann verwendet werden, um während des Drag & Drop-Prozesses die Darstellung des Elements zu ändern, z.B. um ein Element als "gezogen" oder "abgelegt" zu markieren.

// "dataset", die eine Map von Datensätzen darstellt, die in den Attributen "data-" eines Elements gespeichert sind. 
// "outerHTML", die eine Zeichenfolge mit dem HTML-Code des Elements enthält.
export interface DragEventTarget extends EventTarget {
  classList: DOMTokenList;
  dataset: DOMStringMap;
  outerHTML: string;
}

export interface DragAndDropSystem {
  setData(dataType: string, data: string): void;
  getData(dataType: string): string;
  preventDefault(): void;
}

// dataTransfer: Dieses Objekt ist dafür verantwortlich, Daten zwischen dem "ziehenden" und dem "fallenden" Element während des Drag & Drop-Vorgangs zu übertragen.
//currentTarget: Die currentTarget-Eigenschaft in der DropEvent-Schnittstelle verweist auf das Element, auf das das gezogene Element "fallen gelassen" wurde

export interface DropEvent extends Event {
  dataTransfer: DragAndDropSystem;
  currentTarget: HTMLElement;
}