import { assertEquals } from "@std/assert/equals"
import { ListTypes, Markdown } from "../mod.ts"
import { assertThrows } from "@std/assert/throws"

//Header tests
Deno.test("Generates a string with markdown header", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.header("Test Header", 1)

  //Assert
  assertEquals(markdown.content, "# Test Header\n\n")
})

Deno.test("Throws an error if a value greater than 6 is supplied", () => {
  //Arrange
  const markdown = new Markdown()

  //Assert
  assertThrows(() => markdown.header("Test Header", 7))
})

//List tests
Deno.test("Generates an unordered list", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"])

  //Assert
  assertEquals(markdown.content, "- Item 1\n- Item 2\n\n")
})

Deno.test("Generates an unordered list using the + character", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"], ListTypes.UnOrdered, "+")

  //Assert
  assertEquals(markdown.content, "+ Item 1\n+ Item 2\n\n")
})

Deno.test("Generates an unordered list using the * character", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"], ListTypes.UnOrdered, "*")

  //Assert
  assertEquals(markdown.content, "* Item 1\n* Item 2\n\n")
})

Deno.test("Throws an error when an invalid character  is supplied", () => {
  //Arrange
  const markdown = new Markdown()

  //Assert
  assertThrows(() =>
    markdown.list(["Item 1", "Item 2"], ListTypes.UnOrdered, "(")
  )
})

Deno.test("Generates an ordered list", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"], ListTypes.Ordered)

  //Assert
  assertEquals(markdown.content, "1. Item 1\n2. Item 2\n\n")
})

Deno.test("Generates an ordered sub list", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"], ListTypes.Ordered, undefined, true)

  //Assert
  assertEquals(markdown.content, "\t1. Item 1\n\t2. Item 2\n\n")
})

Deno.test("Generates an unordered sub list", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.list(["Item 1", "Item 2"], ListTypes.UnOrdered, "*", true)

  //Assert
  assertEquals(markdown.content, "\t* Item 1\n\t* Item 2\n\n")
})

//Chaining tests
Deno.test("Test chaining", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .header("Header", 1)
    .list(["Item 1", "Item 2"], ListTypes.Ordered)

  //Assert
  assertEquals(markdown.content, "# Header\n\n1. Item 1\n2. Item 2\n\n")
})

//Quote  tests
Deno.test("Generate a quoted string", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.quote("My Quote")

  //Assert
  assertEquals(markdown.content, "> My Quote\n")
})

Deno.test("Generate a nested quote", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .quote("My Quote")
    .quote("Nested quote", true)

  //Assert
  assertEquals(markdown.content, "> My Quote\n>> Nested quote\n")
})

//Paragraph tests
Deno.test("Generates a paragraph of text after the header", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .header("My Header", 1)
    .paragraph("This is a paragraph of text under the header")

  //Assert
  assertEquals(
    markdown.content,
    "# My Header\n\nThis is a paragraph of text under the header\n\n",
  )
})

//Code block tests
Deno.test("Generates a code block with js highlighting", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown.codeBlock("console.log('Hello World')", "javascript")

  //Assert
  assertEquals(
    markdown.content,
    "```javascript\nconsole.log('Hello World')\n```\n\n",
  )
})

//Task list tests
Deno.test("Generates a task list", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .taskList(["Task 1", "Task 2"])

  //Assert
  assertEquals(markdown.content, "- [] Task 1\n- [] Task 2\n\n")
})

//Table tests
Deno.test("Generates table with no options", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .table([
      ["Branch", "Commit"],
      ["master", "0123456789abcdef"],
      ["staging", "fedcba9876543210"],
    ])

  //Assert
  assertEquals(
    markdown.content,
    `| Branch  | Commit           |
| ------- | ---------------- |
| master  | 0123456789abcdef |
| staging | fedcba9876543210 |\n
`,
  )
})

//Horizontal rule tests
Deno.test("Generates a horizontal rule using the defaults", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .horizontalRule()

  //Assert
  assertEquals(markdown.content, "---\n\n")
})

Deno.test("Generates a horizontal rule using the *** syntax", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .horizontalRule("***")

  //Assert
  assertEquals(markdown.content, "***\n\n")
})

Deno.test("Generates a horizontal rule using the ___ syntax", () => {
  //Arrange
  const markdown = new Markdown()

  //Act
  markdown
    .horizontalRule("___")

  //Assert
  assertEquals(markdown.content, "___\n\n")
})
