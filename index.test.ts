import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { encode, decode } from "./mod.ts";

Deno.test("vigenere encoding with only 'a's key and value doesn't modify output", () => {
    assertEquals(encode("dog", "aaa"), "dog");
    assertEquals(encode("dOg", "aAaaaa"), "dOg");

    
    assertEquals(encode("dogdogdog", "AAa"), "dogdogdog");
    assertEquals(encode("dogdogDog", "AaAAa"), "dogdogDog");
})

Deno.test("vigenere decoding with only 'a's key and value doesn't modify output", () => {
    assertEquals(decode("dog", "aaa"), "dog");
    assertEquals(decode("dOg", "aAaaaa"), "dOg");

    
    assertEquals(decode("dogdogdog", "AAa"), "dogdogdog");
    assertEquals(decode("dogdogDog", "AaAAa"), "dogdogDog");
})

Deno.test("Basic vigenere encoding samples work", () => {
    assertEquals(encode("This is a test", "deNo"), "Wlvg lw n hhwg")
})

Deno.test("Basic vigenere decoding samples work", () => {
    assertEquals(decode("Wlvg lw n hhwg", "deNo"), "This is a test")
})