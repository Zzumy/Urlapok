import { TODOLIST2 } from "../scripts/adatok.js";
import { Megjelenit } from "../view/Megjelenit.js";
import { Adatkezelo } from "../modell/Adatkezelo.js";
import { UrlapView } from "../view/UrlapView.js";

export class Controller {
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
            adatkezelo.torles(event.detail);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("kesz", (event) => {
            adatkezelo.kesz(event.detail);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("megse", (event) => {
            adatkezelo.megse(event.detail);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
        $(window).on("ujAdatHozzaAdas", (event) => {
            adatkezelo.ujAdatHozzaAdas(event.detail);
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        });
    }
}
