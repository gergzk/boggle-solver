import { Bar } from "./Bar";

describe("Bar", () => {
    test("only", () => {
        const b = new Bar();
        expect(b.someProp).toBe("prop");
    })
})