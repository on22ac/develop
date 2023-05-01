//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import {listContainer,cards, inputArtikel, inputMenge, addBtn } from "./dom-utils";
import { liste,addEintrag } from "./liste";
import { addEvents } from "./dragandrop";

function renderList() {
    listContainer.innerHTML = ``;
    liste.forEach((listEl, index) => {
      const liEl = document.createElement(`LI`);
      liEl.innerHTML = `
      <div class="eintrag-container">
      <p class="list-item">${listEl.artikel}</p>
      <p class="list-item">${listEl.menge}</p>
    </div>
  `;
        
      listContainer.appendChild(liEl);
  
      if (index > 0) {
        liEl.style.listStyleType = "circle"; // fügt das Aufzählungszeichen hinzu
      }
    });
  }
  
  
function initApp() {
  addEvents();
  renderList();
  addBtn.addEventListener("click", () => {
    addEintrag();
    renderList();
  });
}
initApp();
