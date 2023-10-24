class UrlapView {
    #obj = {};
    #kulcsok = {};

    constructor(kulcsok, obj, szuloElem) {
        this.#kulcsok = kulcsok;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form >");
        this.formElem = this.szuloElem.children("form");
        console.log(this.formElem);
        this.#obj = obj;
        this.#urlapLetrehozasa();
        this.submitGomb = this.formElem.children("div").children("#submit");
        console.log(this.submitGomb);
        this.submitGomb.on("click", (event) => {
            console.log("katt");
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("ujAdatHozzaAdas");
        });
    }
    #adatGyujt() {
        for (const key in this.#obj) {
            this.#obj[key] = $(`#${key}`).val();
        }
        console.log(this.#obj);
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
export default UrlapView;
