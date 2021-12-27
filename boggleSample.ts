import { Algo1 } from "./index";
import { getBoard } from "./BoggleBoard";
const wordArray: string[] = require('words-en').split('\n')

const board = getBoard();
console.log(board);
const algo = new Algo1(wordArray);
const found = algo.findWords(board);
const sortedFound = found.sort((a,b) => b.length - a.length);
console.log(sortedFound);
