export class UrlapView {
    #obj = {};
    #kulcsok = {};

    constructor(kulcsok, obj, szuloElem) {
        this.#kulcsok = kulcsok;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form >");
        this.formElem = this.szuloElem.children("form");
        this.#obj = obj;
        this.#urlapLetrehozasa();
        this.submitGomb = this.formElem.children("div").children("#submit");

        this.submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("ujAdatHozzaAdas");
        });
    }

    #adatGyujt() {
        for (const key in this.#obj) {
            this.#obj[key] = $(`#${key}`).val();
        }
    }

    #urlapLetrehozasa() {
        let txt = "";
        for (const key in this.#obj) {
            txt += `<div class="form-group">
             <label for="${key}"   >${this.#kulcsok[key]}</label>
            <input type="text" class="form-control" id="${key}" name="${key}" value="${
                this.#obj[key]
            }">
            </div>`;
        }
        txt += `<div> 
            <input type="submit" class="btn btn-primary" id="submit"  value="Hozzáad"></div>`;
        this.formElem.html(txt);
    }

    #esemenyTrigger(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, { detail: this.#obj });
        window.dispatchEvent(esemenyem);
    }
}
