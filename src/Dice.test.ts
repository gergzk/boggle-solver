import { Dice } from "./Dice";

describe("Dice", () => {
    const faces = ["a", "b", "c"];
    test("One face returns expected", () => {
        const d = new Dice(["a"]);
        expect(d.roll()).toEqual("a");
    });
    test("Eventually see all faces", () => {
        const d = new Dice(faces);
        const seen = [];
        // this will hang if the test fails
        while (seen.length < 3) {
            const f = d.roll();
            if (seen.indexOf(f) < 0) {
                seen.push(f);
            }
        };
    });
})