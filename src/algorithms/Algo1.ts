import { Board } from "../Board";

export class Algo1 {
    legalWords: {[x: string]: boolean};
    private initialized = false;
    legalStarts: { [x:string]: boolean } = {};
    constructor(legalWords: string[]) {
        this.legalWords = {};
        legalWords.forEach(word => { this.legalWords[word] = true; });
    }

    findWords(board: Board): string[] {
        this.initialize();
        const results = {};
        for (let r = 0; r < board.rows; r++) {
            for (let c = 0; c < board.columns; c++) {
                this.findWordsAtIndex(board, r, c, "", results);
            }
        }
        return Object.keys(results).sort();
    }

    private findWordsAtIndex(board: Board, row: number, column: number, wordSoFar: string, words: { [x:string]: boolean }) {
        // if we've run off the board, return
        if (row < 0 || column < 0 || row >= board.rows || column >= board.columns) {
             return;
        }
        // if we've hit a square we've already tried, return
        const thisSquare = board.squares[row][column];
        if (thisSquare === "") {
            return;
        }
        // see what we have so far
        wordSoFar = wordSoFar + thisSquare;
        // if it's a word, keep it
        if (this.legalWords[wordSoFar]) {
            words[wordSoFar] = true;
        }
        // if it could become a word, keep looking
        if (!this.legalStarts[wordSoFar]) {
            return;
        }
        // for each direction, try it, put it back
        // mark as visited here because all paths prior to this quit so it's moot
        board.squares[row][column] = "";
        for (let r = -1; r <= 1; r++) {
            for (let c = -1; c <= 1; c++) {
                this.findWordsAtIndex(board, row + r, column + c, wordSoFar, words);
            }
        }
        board.squares[row][column] = thisSquare;
    }

    private initialize() {
        if (this.initialized) { return; }
        Object.keys(this.legalWords).forEach(word => this.initWord(word));
        this.initialized = true;
    }
    private initWord(word: string) {
        for(let i = 1; i < word.length; i++) {
            this.legalStarts[word.substr(0, i)] = true;
        }
    }
}