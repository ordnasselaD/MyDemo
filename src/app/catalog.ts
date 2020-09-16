export class Catalog {
    private tipologiaProdotti=["Monitor","Smartphone","Computer"]
    private monitor = [
        {
            marca: "acer",
            modello: "PR-0255",
            prezzi: "730"
        },
        {
            marca: "lg",
            modello: "STD-L",
            prezzi: "250"
        },
        {
            marca: "samsung",
            modello: "UHD-TV",
            prezzi: "950"
        },
    ]
    smartphone;
    computer;
    constructor() {

    }
    getTipologiaProdotti(){
        return this.tipologiaProdotti;
    }
    
    getMonitor(){
        return this.monitor;
    }
}