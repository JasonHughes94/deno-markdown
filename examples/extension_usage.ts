import { Markdown, italics, bold } from "../mod.ts";

//Inline extensions
var markdown = new Markdown();
markdown
  .paragraph("This is " + italics("inline", '*') + " italics")
  .paragraph("This is " + bold("inline") + " bold")

//Stand alone extension
var italicText = italics('italics');
var boldText = bold('bold');


console.log(markdown.content);
console.log('--------------')
console.log(italicText);
console.log(boldText);
