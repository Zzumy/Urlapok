export class Adatkezelo {
    #list = [];
    constructor(list) {
        this.#list = list;
    }
    torles(index) {
        this.#list.splice(index, 1);
    }
    kesz(index) {
        this.#list[index].kesz = true;
    }
    megse(index) {
        this.#list[index].kesz = false;
    }
    ujAdatHozzaAdas(obj) {
        this.#list.push(obj);
    }
    hatralevoFeladatokSzama() {}
    elvegzettFeladatok() {}
    hataridoigHatralevoNap() {}
    kovetkezoHatarido() {}
}
