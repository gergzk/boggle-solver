export class Deck {
    elements: any[];
    constructor(elements: any[]) {
        this.elements = elements;
    }

    shuffle(): Deck {
        const set = this.elements.map(el => el);
        const out = [];
        // sort each element based on its rando
        while(set.length > 0) {
            const index = Math.floor(Math.random() * set.length);
            const item = set.splice(index, 1)[0];
            out.push(item);
        }
        return new Deck(out);
    }
}