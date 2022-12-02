# viginere cipher

deno implementation of the viginere cypher in typescript.
it can take a key

```ts
import { encrypt, decrypt } from "https://deno.land/x/viginere_cipher";

const encrypted = encrypt("This is a test", "deNo") // "Wlvg lw n hhwg"
const decrypted = decrypt("Wlvg lw n hhwg", "deNo") // "THis is a test"
```