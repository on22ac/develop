//querySelektoren für die Listeinträge
export const listContainer = document.querySelector("#listContainer") as HTMLOListElement;
export const inputArtikel = document.querySelector("#artikel") as HTMLInputElement;
export const inputMenge = document.querySelector("#menge") as HTMLInputElement;
export const addBtn = document.querySelector("#addBtn") as HTMLButtonElement;


//querySelektoren für den Drag&Drop-Bereich
//const cards wählt alle HTML-Elemente aus, die der CSS-Klasse "card" entsprechen und speichert sie in einer Liste mit dem Namen "cards".
export const cards = document.querySelectorAll<HTMLElement>(".card");
export const containerTodo = document.querySelector(".column-todo") as HTMLDivElement;
export const containerAlreadydone = document.querySelector(".column-alreadydone") as HTMLDivElement;