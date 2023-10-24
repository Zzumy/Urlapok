export class MegjelenitSor {
    #adat = {};
    #index;

    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.#index = index;
        this.tablaElem = szuloElem;

        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem = this.sorElem.children("td").children(".megse");

        if (this.#adat.kesz) {
            this.#hatterszin("lightgreen", "none", "inline");
        } else {
            this.#hatterszin("white", "inline", "none");
        }

        this.keszElem.on("click", () => {
            this.#hatterszin("lightgreen", "none", "inline");
            this.#esemenyTrigger("kesz");
        });
        this.megseElem.on("click", () => {
            this.#hatterszin("white", "inline", "none");
            this.#esemenyTrigger("megse");
        });
        this.torolElem.on("click", () => {
            this.#esemenyTrigger("torles");
        });
    }

    #hatterszin(szin, keszElemAllapot, megseElemAllapot) {
        this.sorElem.css("background-color", szin);
        this.keszElem.css("display", keszElemAllapot);
        this.megseElem.css("display", megseElemAllapot);
    }

    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            if (key !== "kesz") {
                if (Object.hasOwnProperty.call(this.#adat, key)) {
                    const element = this.#adat[key];
                    txt += `<td>${element}</td>`;
                }
            }
        }
        txt += `<td><span class="kesz">✔️</span> <span class="megse">❌</span><span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, { detail: this.#index });
        window.dispatchEvent(esemenyem);
    }
}
