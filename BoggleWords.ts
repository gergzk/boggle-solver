import { dictionary } from "./dictionary";

export function getLegalWords() {
    const wordArray: string[] = Object.keys(dictionary);
    return wordArray;
}

export function getWordDefinition(word: string) {
    const def = dictionary[word];
    return def;
}
