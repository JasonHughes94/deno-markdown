import { Markdown, italics } from "../mod.ts";

//Inline italics
var markdown = new Markdown();
markdown
  .paragraph("This is " + italics("inline", '*') + " italics");


//Stand alone italics
var italicText = italics('Italics');

console.log(markdown.content);
console.log('--------------')
console.log(italicText);