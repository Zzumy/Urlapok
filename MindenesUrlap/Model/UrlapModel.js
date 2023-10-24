import { URLAPLEIRO } from "./urlapleiro.js";

export class UrlapModel {
    #leiro = {};
    constructor() {
        this.#leiro = URLAPLEIRO;
    }

    get leiro() {
        return { ...this.#leiro };
    }
}
