export function getLegalWords() {
    const wordArray: string[] = require('words-en').split('\n');
    return wordArray;
}
