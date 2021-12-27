export class Board {
    readonly rows: number;
    readonly columns: number;
    readonly squares: string[][];
    constructor(squares: string[][]) {
        this.rows = squares.length;
        this.columns = squares[0].length;
        squares.forEach(row => {
            if (row.length != this.columns) {
                throw new Error("Input to board is not a rectangle");
            }
        })
        this.squares = squares;
    }

    clone(): Board {
        const clonedSquares = this.squares.map(row => row.map(cell => cell));
        return new Board(clonedSquares);
    }
}