export class Dice {
    readonly faces: string[];
    constructor(faces: string[]) {
        this.faces = faces;
    }

    roll(): string {
        const rand = Math.floor(Math.random() * this.faces.length);
        return this.faces[rand];
    }
}