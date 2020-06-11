import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { Markdown, italics } from "../mod.ts";

Deno.test('Generates a string with italics syntax using the defaults', () => {
  //Arrange
  const content = italics("I am in italics")

  //Assert
  assertEquals(content, '_I am in italics_');
});

Deno.test('Generates a string with italics syntax using the * character', () => {
  //Arrange
  const content = italics("I am in italics", '*')

  //Assert
  assertEquals(content, '*I am in italics*');
});

Deno.test('Throws an error if an invalid character is supplied', () => {
  //Assert
  assertThrows(() => italics("I am in italics", '('));
});

Deno.test('Generates an italic string inline with a paragraph tag', () => {
  //Arrange
  var markdown = new Markdown();
  markdown
    .paragraph("This is " + italics("inline", '*') + " italics");

  //Assert
  assertEquals(markdown.content, `This is *inline* italics\n\n`);
});