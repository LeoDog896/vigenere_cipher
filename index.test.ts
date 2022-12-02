import { assert, assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { viginere } from "./mod.ts";

Deno.test("Viginere with only 'a's key and value doesn't modify output", () => {
    assertEquals(viginere("dog", "aaa"), "dog");
    assertEquals(viginere("dOg", "aAaaaa"), "dOg");

    
    assertEquals(viginere("dogdogdog", "AAa"), "dogdogdog");
    assertEquals(viginere("dogdogDog", "AaAAa"), "dogdogDog");
})

Deno.test("Basic viginere samples work", () => {
    assertEquals(viginere("This is a test", "deNo"), "Wlvg-lw-n-hhwg")
})