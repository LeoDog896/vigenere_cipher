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
    name: "viginere_cipher",
    version: Deno.args[0],
    description: "Pure TS viginere cipher implementation",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/LeoDog896/viginere_cipher.git",
    },
    bugs: {
      url: "https://github.com/LeoDog896/viginere_cipher/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");