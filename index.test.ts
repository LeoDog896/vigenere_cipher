import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { encrypt } from "./mod.ts";

Deno.test("Viginere with only 'a's key and value doesn't modify output", () => {
    assertEquals(encrypt("dog", "aaa"), "dog");
    assertEquals(encrypt("dOg", "aAaaaa"), "dOg");

    
    assertEquals(encrypt("dogdogdog", "AAa"), "dogdogdog");
    assertEquals(encrypt("dogdogDog", "AaAAa"), "dogdogDog");
})

Deno.test("Basic viginere samples work", () => {
    assertEquals(encrypt("This is a test", "deNo"), "Wlvg lw n hhwg")
})