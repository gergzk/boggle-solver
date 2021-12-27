import { Algo1 } from "./index";
import { getBoard, getBoardFromRolls } from "./BoggleBoard";
import { getLegalWords } from "./BoggleWords";
const wordArray = getLegalWords();

const boardLetters = process.argv[2];
let board;
if (boardLetters) {
    const splitQU = boardLetters.split("qu");
    let rolls: string[];
    if (splitQU.length === 1) {
        rolls = boardLetters.split("");
    } else {
        rolls = ["qu"];
        rolls = rolls.concat(splitQU[0].split(""));
        rolls = rolls.concat(splitQU[1].split(""));
    }
    board = getBoardFromRolls(rolls);
} else {
    board = getBoard();
}
console.log(board);
const algo = new Algo1(wordArray);
const found = algo.findWords(board);
const sortedFound = found.sort((a,b) => b.length - a.length);
console.log(`Found ${sortedFound.length} words:`)
sortedFound.forEach(w => console.log(w));

