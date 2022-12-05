# vigenere cipher

deno implementation of the vigenere cypher in typescript.

Available via deno ([`vigenere_cipher`](https://deno.land/x/vigenere_cipher)) or node ([`vigenere-cipher`](https://npmjs.com/package/vigenere-cipher))

```ts
import { encrypt, decrypt } from "https://deno.land/x/vigenere_cipher"; // with npm: vigenere-cipher

const encrypted = encrypt("This is a test", "deNo") // "Wlvg lw n hhwg"
const decrypted = decrypt("Wlvg lw n hhwg", "deNo") // "THis is a test"
```