//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import {listContainer } from "./dom-utils";
import { liste } from "./liste";


function renderList() {
    listContainer.innerHTML = ``;
    liste.forEach((listEl, index) => {
      const liEl = document.createElement(`LI`);
      liEl.innerHTML = `
          <div class="eintrag-container">
            <p ${
              index === 0
                ? 'style="font-weight:bold; font-size: 1.0em;"'
                : 'style="font-size: 1.0em;"'
            }>${listEl.artikel}</p>
            <p ${
              index === 0
                ? 'style="font-weight:bold; font-size: 1.0em;"'
                : 'style="font-size: 1.0em;"'
            }>${listEl.menge}</p>
          </div>
        `;
      listContainer.appendChild(liEl);
  
      if (index > 0) {
        liEl.style.listStyleType = "circle"; // fügt das Aufzählungszeichen hinzu
      }
    });
  }

