//import { Board, Deck, Dice, Algo1 } from "./index";
import { Deck, Dice, Board } from "./index";


const allTheDice = [
    new Dice("soiste".split("")),
    new Dice("ngeeaa".split("")),
    new Dice("ueesni".split("")),
    new Dice("hrvtew".split("")),
    new Dice("wtoota".split("")),
    new Dice("cmuoit".split("")),
    new Dice("eehnwg".split("")),
    new Dice("obbajo".split("")),
    new Dice("zhrlnn".split("")),
    new Dice("eltytr".split("")),
    new Dice("pshaco".split("")),
    new Dice("dryvle".split("")),
    new Dice("rliexd".split("")),
    new Dice("ytdtsi".split("")),
    new Dice(["m","u","h","n","i","qu"]),
    new Dice("aspfkf".split("")),
];

// so this is the set of dice
const deck = new Deck(allTheDice).shuffle();
const roll = deck.elements.map(dice => dice.roll());
const sq: string[][] = [];
for (let i = 0; i < 4; i++) {
    const r = [];
    for (let j = 0; j < 4; j++) {
        r.push(roll[i*4+j]);
    }
    sq.push(r);
}
const board = new Board(sq);
console.log(board)
