import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { Markdown, italics, bold, strike } from "../mod.ts";

//Italics tests
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

//Bold tests
Deno.test('Generates a string with bold syntax using the defaults', () => {
  //Arrange
  const content = bold("I am in bold")

  //Assert
  assertEquals(content, '**I am in bold**');
});

Deno.test('Generates a string with bold syntax using the __ character', () => {
  //Arrange
  const content = bold("I am in bold", '__')

  //Assert
  assertEquals(content, '__I am in bold__');
});

Deno.test('Throws an error if an invalid character is supplied', () => {
  //Assert
  assertThrows(() => bold("I am in bold", '*_*'));
});

Deno.test('Generates an bold string inline with a paragraph tag', () => {
  //Arrange
  var markdown = new Markdown();
  markdown
    .paragraph("This is " + bold("inline") + " bold");

  //Assert
  assertEquals(markdown.content, `This is **inline** bold\n\n`);
});

//Strike tests
Deno.test('Generates a string with a strike through it', () => {
  //Arrange
  const content = strike("strike")

  //Assert
  assertEquals(content, '~~strike~~');
});

Deno.test('Generates an strike inline with a paragraph tag', () => {
  //Arrange
  var markdown = new Markdown();
  markdown
    .paragraph("This is " + strike("strike") + " bold");

  //Assert
  assertEquals(markdown.content, `This is ~~strike~~ bold\n\n`);
});