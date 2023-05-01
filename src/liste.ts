import {ListEintrag } from "./interface";
import {inputArtikel, inputMenge } from "./dom-utils";

export const liste: Array<ListEintrag> = [
    {
      artikel: "Lebensmittel",
      menge: "Anzahl (entweder Emojis oder Stückzahl angeben)",
    },
  ];

  export function addEintrag() {
    const artikel = inputArtikel.value;
    const menge = inputMenge.value;
  
    if (artikel && menge) {
      liste.push({
        artikel,
        menge,
      });
    } else {
      alert(`Bitte beide Eingabefelder ausfüllen`);
    }
  }
