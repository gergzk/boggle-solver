import { Algo1 } from "./Algo1";
import { Board } from "../Board";

describe("Algo1", () => {
    describe("null tests", () => {
        test("No legal words finishes", () => {
            const a = new Algo1([]);
            const b = new Board([["b", "a"],["t","c"]]);
            a.findWords(b);
        });
        test("No legal words finds no words", () => {
            const a = new Algo1([]);
            const b = new Board([["b", "a"],["t","c"]]);
            const words = a.findWords(b);
            expect(words.length).toBe(0);
        });
        test("Empty board finds no results", () => {
            const a = new Algo1(["cat", "dog"]);
            const b = new Board([[]]);
            const words = a.findWords(b);
            expect(words.length).toBe(0);
        });
    });
    describe("Real tests", () => {
        test("Finds each words", () => {
            const a = new Algo1(["cat", "car", "card", "rad"]);
            const b = new Board([["c", "a"],["t", "d"]]);
            const words = a.findWords(b);
            expect(words).toEqual(["cat"]);
        });
        test("Finds each words", () => {
            const a = new Algo1(["cat", "car", "card", "rad"]);
            const b = new Board([["c", "a"],["r", "d"]]);
            const words = a.findWords(b);
            expect(words).toEqual(["car", "card", "rad"]);
        });
        test("Uses duplicate available letter", () => {
            const a = new Algo1(["sobb"]);
            const b = new Board([["s", "o"],["b", "b"]]);
            const words = a.findWords(b);
            expect(words).toEqual(["sobb"]);
        });
        test("Does not reuse letter", () => {
            const a = new Algo1(["carr"]);
            const b = new Board([["c", "a"],["r", "d"]]);
            const words = a.findWords(b);
            expect(words).toEqual([]);
        });
    });
});