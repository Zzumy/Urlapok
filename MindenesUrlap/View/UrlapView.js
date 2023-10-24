import { NumberUrlapElem } from "./NumberUrlapElem.js";
import { TextUrlapElem } from "./TextUrlapElem.js";

export class UrlapView {
    #leiro = {};
    #urlapElemLista = [];
    #osszesElemValidE = true;
    #urlapAdat = {};
    constructor(szuloElem, leiro) {
        this.szuloElem = szuloElem;
        this.#leiro = leiro;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapOsszerak();
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach((elem) => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            });
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach((elem) => {
                    this.#urlapAdat[elem.key] = elem.value;
                });
                this.#esemenyLetrehozas("valid");
            } else {
                console.log("nem valid urlap");
            }
        });
    }

    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(
                        new TextUrlapElem(key, this.#leiro[key], this.formElem)
                    );
                    break;
                case "number":
                    this.#urlapElemLista.push(
                        new NumberUrlapElem(
                            key,
                            this.#leiro[key],
                            this.formElem
                        )
                    );
                    break;
                default:
                    console.log("ez meg nincs meg");
                    break;
            }
        }
        let txt = `<input type="submit" id="submit" value="OK"></input>`;
        this.formElem.append(txt);
    }

    #esemenyLetrehozas(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, {
            detail: this.#urlapAdat,
        });
        window.dispatchEvent(esemenyem);
    }
}
