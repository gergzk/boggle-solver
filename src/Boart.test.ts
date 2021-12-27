import { Board } from "./Board";

describe("Board", () => {
    const squares = [
        ["a", "b", "c"],
        ["e", "f", "g"]
    ];
    describe("Constructor", () => {
        test("Sets rows right", () => {
            const b = new Board(squares);
            expect(b.rows).toBe(2);
        });
        test("Sets columns right", () => {
            const b = new Board(squares);
            expect(b.columns).toBe(3);
        });
        test("Sets squares", () => {
            const b = new Board(squares);
            expect(b.squares).toEqual(squares);
        });
        test("Throws if squares are not a rectangle", () => {
            expect(() => new Board([["a"], ["b", "c"]])).toThrowError();
        });
    });
    describe("clone", () => {
        test("clone returns same data", () => {
            const b1 = new Board(squares);
            const b2 = b1.clone();
            expect(b1).toStrictEqual(b2);
        });
        test("clone is not the same objects", () => {
            const b1 = new Board(squares);
            const b2 = b1.clone();
            expect(b1).not.toBe(b2);
            expect(b1.squares).not.toBe(b2.squares);
        });
    });
});
