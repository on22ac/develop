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
  