import { Markdown, italics, bold, strike } from "../mod.ts";

//Inline extensions
var markdown = new Markdown();
markdown
  .paragraph("This is " + italics("inline", '*') + " italics")
  .paragraph("This is " + bold("inline") + " bold")
  .paragraph("This is " + strike("inline") + " strike")

//Stand alone extension
var italicText = italics('italics');
var boldText = bold('bold');
var strikeText = strike('strike');

console.log(markdown.content);
console.log(italicText);
console.log(boldText);
console.log(strikeText);

