import { Deck } from "./Deck";

describe("Deck", () => {
    const sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    test("Shuffles", () => {
        const d1 = new Deck(sequence);
        const d2 = d1.shuffle();
        expect(d1.elements).not.toEqual(d2.elements);
    });
    test("Has same elements", () => {
        const d1 = new Deck(sequence);
        const d2 = d1.shuffle();
        d2.elements.sort();
        expect(d1.elements).toEqual(d2.elements);
    });
})