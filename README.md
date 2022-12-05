# vigenere cipher

deno implementation of the vigenere cypher in typescript.

Available via deno ([`vigenere_cipher`](https://deno.land/x/vigenere_cipher)) or node ([`@leodog896/vigenere-cipher`](https://npmjs.com/package/@leodog896/vigenere-cipher))

```ts
import { encrypt, decrypt } from "https://deno.land/x/vigenere_cipher"; // with npm: @leodog896/vigenere-cipher

const encrypted = encrypt("This is a test", "deNo") // "Wlvg lw n hhwg"
const decrypted = decrypt("Wlvg lw n hhwg", "deNo") // "THis is a test"
```