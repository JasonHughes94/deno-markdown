import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { Markdown, ListTypes } from '../mod.ts';

Deno.test('Generates a string with markdown header', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.header('Test Header', 1);

  //Assert
  assertEquals('# Test Header\n\n', markdown.content);
});

Deno.test('Throws an error if a value greater than 6 is supplied', () => {
  //Arrange
  let markdown = new Markdown();

  //Assert
  assertThrows(() => markdown.header('Test Header', 7));
});

Deno.test('Generates an unordered list', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2']);

  //Assert
  assertEquals('- Item 1\n- Item 2\n\n', markdown.content);
});

Deno.test('Generates an unordered list using the + character', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '+');

  //Assert
  assertEquals('+ Item 1\n+ Item 2\n\n', markdown.content);
});

Deno.test('Generates an unordered list using the * character', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '*');

  //Assert
  assertEquals('* Item 1\n* Item 2\n\n', markdown.content);
});

Deno.test('Throws an error when an invalid character  is supplied', () => {
  //Arrange
  let markdown = new Markdown();

  //Assert
  assertThrows(() => markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '('));
});

Deno.test('Generates an ordered list', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.Ordered);

  //Assert
  assertEquals('1. Item 1\n2. Item 2\n\n', markdown.content);
});

Deno.test('Test chaining', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown
    .header('Header', 1)
    .list(['Item 1', 'Item 2'], ListTypes.Ordered);

  //Assert
  assertEquals('# Header\n\n1. Item 1\n2. Item 2\n\n', markdown.content);
});

Deno.test('Generate a quoted string', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.quote('My Quote');

  //Assert
  assertEquals('> My Quote\n\n', markdown.content);
});

Deno.test('Generates a paragraph of text after the header', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown
    .header('My Header', 1)
    .paragraph('This is a paragraph of text under the header');

  //Assert
  assertEquals('# My Header\n\nThis is a paragraph of text under the header\n\n', markdown.content);
});

Deno.test('Generates a inline code  block', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.inlineCode('console.log(\'Hello World\')')

  //Assert
  assertEquals('`console.log(\'Hello World\')`', markdown.content);
});