import { dictionary } from "./dictionary";

export function getLegalWords() {
    const wordArray: string[] = Object.keys(dictionary);
    return wordArray;
}
