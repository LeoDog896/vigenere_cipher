// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    name: "@leodog896/vigenere-cipher",
    version: "0.0.1",
    tags: ["vigenere", "cipher", "vigenere-cipher"],
    description: "Pure TS vigenere cipher implementation",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/LeoDog896/vigenere_cipher.git",
    },
    bugs: {
      url: "https://github.com/LeoDog896/vigenere_cipher/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");