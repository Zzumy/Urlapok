import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../view/Megjelenit.js";
import Adatkezelo from "../modell/Adatkezelo.js";
import UrlapView from "../view/UrlapView.js";
class Controller {
    constructor() {
        const szuloELEM = $(".tarolo");
        const adatkezelo = new Adatkezelo(TODOLIST2);
        const urlapView = new UrlapView(
            {
                tevekenyseg: "Tevékenység",
                hatarido: "Határidő",
                kesz: "Állapot (true/false)",
            },
            {
                tevekenyseg: "",
                hatarido: "",
                kesz: false,
            },
            $(".ujadat")
        );
        new Megjelenit(TODOLIST2, szuloELEM);
        $(window).on("torles", (event) => {
            console.log(event.detail);
            /* TODOLIST2.splice(event.detail, 1); */
            adatkezelo.torles(event.detail);
            console.log(TODOLIST2);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("kesz", (event) => {
            adatkezelo.kesz(event.detail);
            console.log(TODOLIST2);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("megse", (event) => {
            console.log(event.detail);

            adatkezelo.megse(event.detail);
            console.log(TODOLIST2);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("ujAdatHozzaAdas", (event) => {
            console.log(event.detail);

            adatkezelo.ujAdatHozzaAdas(event.detail);
            console.log(TODOLIST2);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
    }
}
export default Controller;
