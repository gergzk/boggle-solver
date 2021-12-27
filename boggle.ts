//import { Board, Deck, Dice, Algo1 } from "./index";
import { Algo1 } from "./index";
import { getBoard } from "./BoggleBoard";
import wordListPath from "word-list";
console.log(`path: ${wordListPath}`)
const fs = require("fs");
const wordArray: string[] = fs.readFileSync(wordListPath, 'utf8').split('\n');
//console.log(`${wordArray.length} words: ${wordArray.slice(0, 20)}`)

const board = getBoard();
console.log(board);
const algo = new Algo1(wordArray);
const found = algo.findWords(board);
const sortedFound = found.sort((a,b) => b.length - a.length);
console.log(sortedFound);
