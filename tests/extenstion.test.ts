import { assertEquals } from "@std/assert/equals"
import { bold, image, inlineCode, italics, Markdown, strike } from "../mod.ts"
import { assertThrows } from "@std/assert/throws"

//Inline code tests
Deno.test("Generates a block of inline code", () => {
  //Arrange
  const content = inlineCode("var denoIsCool = true")

  //Assert
  assertEquals(content, "`var denoIsCool = true`")
})

//Italics tests
Deno.test("Generates a string with italics syntax using the defaults", () => {
  //Arrange
  const content = italics("I am in italics")

  //Assert
  assertEquals(content, "_I am in italics_")
})

Deno.test("Generates a string with italics syntax using the * character", () => {
  //Arrange
  const content = italics("I am in italics", "*")

  //Assert
  assertEquals(content, "*I am in italics*")
})

Deno.test("Throws an error if an invalid character is supplied", () => {
  //Assert
  assertThrows(() => italics("I am in italics", "("))
})

Deno.test("Generates an italic string inline with a paragraph tag", () => {
  //Arrange
  const markdown = new Markdown()

  markdown
    .paragraph("This is " + italics("inline", "*") + " italics")

  //Assert
  assertEquals(markdown.content, `This is *inline* italics\n\n`)
})

//Bold tests
Deno.test("Generates a string with bold syntax using the defaults", () => {
  //Arrange
  const content = bold("I am in bold")

  //Assert
  assertEquals(content, "**I am in bold**")
})

Deno.test("Generates a string with bold syntax using the __ character", () => {
  //Arrange
  const content = bold("I am in bold", "__")

  //Assert
  assertEquals(content, "__I am in bold__")
})

Deno.test("Throws an error if an invalid character is supplied", () => {
  //Assert
  assertThrows(() => bold("I am in bold", "*_*"))
})

Deno.test("Generates an bold string inline with a paragraph tag", () => {
  //Arrange
  const markdown = new Markdown()

  markdown
    .paragraph("This is " + bold("inline") + " bold")

  //Assert
  assertEquals(markdown.content, `This is **inline** bold\n\n`)
})

//Strike tests
Deno.test("Generates a string with a strike through it", () => {
  //Arrange
  const content = strike("strike")

  //Assert
  assertEquals(content, "~~strike~~")
})

Deno.test("Generates an strike inline with a paragraph tag", () => {
  //Arrange
  const markdown = new Markdown()

  markdown
    .paragraph("This is " + strike("strike") + " bold")

  //Assert
  assertEquals(markdown.content, `This is ~~strike~~ bold\n\n`)
})

//Image tests
Deno.test("Generates a image block with inline style and no title", () => {
  //Arrange
  const content = image("my image", "https://link.com/image.png")

  //Assert
  assertEquals(content, "![my image](https://link.com/image.png)")
})

Deno.test("Generates a image block with inline style and a title", () => {
  //Arrange
  const content = image("my image", "https://link.com/image.png", "My Title")

  //Assert
  assertEquals(content, '![my image](https://link.com/image.png "My Title")')
})

//Link tests
Deno.test("Generates a link block with inline style and no title", () => {
  //Arrange
  const content = image("my link", "https://link.com")

  //Assert
  assertEquals(content, "![my link](https://link.com)")
})

Deno.test("Generates a link block with inline style and a title", () => {
  //Arrange
  const content = image("my link", "https://link.com", "My Title")

  //Assert
  assertEquals(content, '![my link](https://link.com "My Title")')
})
