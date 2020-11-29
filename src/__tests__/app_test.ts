import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { capitalize, hello } from "../app.ts";

Deno.test("Should capitize name when first letter lowercase", () => {
  assertEquals(capitalize("matt"), "Matt");
});

Deno.test("Should say hello when passed name", () => {
  assertEquals(hello("Matt"), "Hello Matt");
});
