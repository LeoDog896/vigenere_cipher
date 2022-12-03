export function encode(input: string, key: string, alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")): string {
    let keyIndex = 0;
    return input.split("").map((character) => {
        if (!alphabet.includes(character.toLocaleLowerCase())) return character;
        const isUpperCase = character.toLocaleUpperCase() == character;

        const charIndex = alphabet.indexOf(character.toLocaleLowerCase())
        const keyCharacterIndex = alphabet.indexOf(key[keyIndex % key.length].toLocaleLowerCase())

        const shiftedCharacter = alphabet[(charIndex + keyCharacterIndex) % alphabet.length];

        keyIndex++;
        return isUpperCase ? shiftedCharacter.toLocaleUpperCase() : shiftedCharacter;
    }).join("");
}

export function decode(input: string, key: string, alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("")): string {
    let keyIndex = 0;
    return input.split("").map((character) => {
        if (!alphabet.includes(character.toLocaleLowerCase())) return character;
        const isUpperCase = character.toLocaleUpperCase() == character;

        const charIndex = alphabet.indexOf(character.toLocaleLowerCase())
        const keyCharacterIndex = alphabet.indexOf(key[keyIndex % key.length].toLocaleLowerCase())

        let absoluteIndex = (charIndex - keyCharacterIndex);
        if (absoluteIndex < 0) absoluteIndex = absoluteIndex % alphabet.length + alphabet.length;
        const shiftedCharacter = alphabet[absoluteIndex % alphabet.length];

        keyIndex++;
        return isUpperCase ? shiftedCharacter.toLocaleUpperCase() : shiftedCharacter;
    }).join("");
}

