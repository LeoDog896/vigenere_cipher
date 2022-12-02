export function viginere(input: string, key: string, alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")): string {
    return input.split("").map((character, i) => {
        if (!alphabet.includes(character)) return character;
        const isUpperCase = character.toLocaleUpperCase() == character;

        const charIndex = alphabet.indexOf(character.toLocaleLowerCase())
        const keyCharacterIndex = alphabet.indexOf(key[i % key.length].toLocaleLowerCase())
        
        const shiftedCharacter = alphabet[(charIndex + keyCharacterIndex) % alphabet.length];

        return isUpperCase ? shiftedCharacter.toLocaleUpperCase() : shiftedCharacter;
    }).join("");
}

