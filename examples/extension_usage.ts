import {
  bold,
  image,
  inlineCode,
  italics,
  Markdown,
  strike,
} from "https://deno.land/x/deno_markdown@v0.2/mod.ts"

//Inline extensions
const markdown = new Markdown()
markdown
  .paragraph("This is " + italics("inline", "*") + " italics")
  .paragraph("This is " + bold("inline") + " bold")
  .paragraph("This is " + strike("inline") + " strike")
  .paragraph("This is " + italics("Nested " + bold("bold")) + " inline")

//Stand alone extension
const codeText = inlineCode("console.log('Hello World')")
const italicText = italics("italics")
const boldText = bold("bold")
const strikeText = strike("strike")
const nestedBoldTest = italics("Nested " + bold("bold"))
const imageText = image("alt", "image")
const linkText = image("alt", "link")

console.log(markdown.content)
console.log(codeText)
console.log(italicText)
console.log(boldText)
console.log(strikeText)
console.log(nestedBoldTest)
console.log(imageText)
console.log(linkText)
