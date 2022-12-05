# vigenere cipher

deno implementation of the vigenere cypher in typescript.

```ts
import { encrypt, decrypt } from "https://deno.land/x/vigenere_cipher";

const encrypted = encrypt("This is a test", "deNo") // "Wlvg lw n hhwg"
const decrypted = decrypt("Wlvg lw n hhwg", "deNo") // "THis is a test"
```