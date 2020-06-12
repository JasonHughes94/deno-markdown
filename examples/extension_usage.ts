import { Markdown, italics, bold, strike, image, inlineCode } from "https://deno.land/x/deno_markdown/mod.ts";

//Inline extensions
var markdown = new Markdown();
markdown
  .paragraph("This is " + italics("inline", "*") + " italics")
  .paragraph("This is " + bold("inline") + " bold")
  .paragraph("This is " + strike("inline") + " strike")
  .paragraph("This is " + italics("Nested " + bold("bold")) + " inline");

//Stand alone extension
var codeText = inlineCode("console.log('Hello World')");
var italicText = italics("italics");
var boldText = bold("bold");
var strikeText = strike("strike");
var nestedBoldTest = italics("Nested " + bold("bold"));
var imageText = image("alt", "image");
var linkText = image("alt", "link");

console.log(markdown.content);
console.log(codeText);
console.log(italicText);
console.log(boldText);
console.log(strikeText);
console.log(nestedBoldTest);
console.log(imageText);
console.log(linkText);
