import { dictionary } from "./dictionary";

export function getLegalWords() {
    const wordArray: string[] = Object.keys(dictionary);
    const filtered = wordArray.filter(word => dictionary[word].indexOf("[Obs.]") < 0);
    return filtered;
}

export function getWordDefinition(word: string) {
    const def = dictionary[word];
    return def;
}
