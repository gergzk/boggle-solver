import { Algo1 } from "./index";
import { getBoard } from "./BoggleBoard";
import { getLegalWords } from "./BoggleWords";
const wordArray = getLegalWords();

const board = getBoard();
console.log(board);
const algo = new Algo1(wordArray);
const found = algo.findWords(board);
const sortedFound = found.sort((a,b) => b.length - a.length);
console.log(sortedFound);
