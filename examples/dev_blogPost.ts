import { Markdown, bold, link } from "https://deno.land/x/deno_markdown/mod.ts";

let markdown = new Markdown();

await markdown
  .header("Why Deno?", 2)
  .paragraph(
    "Like the rest of the Node community I've been jumping on the Deno band wagon and for good reason!",
  )
  .paragraph(
    `I could create a fairly large list of why I like Deno however I'd recommend everyone read ${
      link("The Deno Handbook", "https://flaviocopes.com/deno/")
    } by Flavio Copes and see for yourself.`,
  )
  .header("So what is deno-markdown?", 2)
  .paragraph(
    "deno-markdown is a module that allows a developer to quickly create markdown content and files using TS function chaining.",
  )
  .header("Examples", 3)
  .paragraph(
    "Create a Markdown file with a 2 headings, a paragraph, and a bullet point list of items.",
  )
  .codeBlock(
    `
import { Markdown, ListTypes } from 'https://deno.land/x/deno_markdown/mod.ts';

let markdown = new Markdown();

await markdown
    .header("Hello Dev community!", 1) // This will generate # Hello Dev community!
    .paragraph("Here is an example of some text under the heading")
    .header("Another heading!", 2) // This will generate ## Another heading!
    .list(["Item 1", "Item 2"], ListTypes.UnOrdered, "*") // Character can be set to *, -, or + 
    .write("./folder/", "fileName"); // This will write the content out to ./folder/fileName.md 
  `,
    "typescript",
  )
  .paragraph("Output:")
  .codeBlock(`
# Hello Dev community!

Here is an example of some text under the heading

## Another heading!

* Item 1
* Item 2
  `)
  .paragraph(`Create markdown tables`)
  .codeBlock(
    `
import { Markdown } from "https://deno.land/x/deno_markdown/mod.ts";

let markdown = new Markdown();

await markdown
  .table([
    ["Branch", "Commit"],
    ["master", "0123456789abcdef"],
    ["staging", "fedcba9876543210"],
  ])
  .write("./examples/", "table");
  `,
    "typescript",
  )
  .paragraph("Output:")
  .codeBlock(`
| Branch  | Commit           |
| ------- | ---------------- |
| master  | 0123456789abcdef |
| staging | fedcba9876543210 |
  `)
  .paragraph(
    "You can also use the built in string extensions to enhance your markdown files",
  )
  .codeBlock(
    `
import { Markdown, bold, italics } from 'https://deno.land/x/deno_markdown/mod.ts';

let markdown = new Markdown();

await markdown
  .header("Hello Dev community!", 1)
  .paragraph(\`You can inline extensions like \${bold('bold')} or \${italics('italics')}\`)
  .write("./examples/", "fileName");
  `,
    "typescript",
  )
  .paragraph("Output:")
  .codeBlock(`
# Hello Dev community!

You can inline extensions like **bold** or _italics_
  `)
  .paragraph(
    link(
      "Further Examples",
      "https://github.com/JasonHughes94/deno-markdown/tree/master/examples",
    ),
  )
  .header("What's next?", 2)
  .paragraph(
    `I will be looking to improve the code quality overall and remove the dependency on ${
      link("markdown-table", "https://github.com/wooorm/markdown-table")
    }.`,
  )
  .paragraph(
    "No doubt as my knowledge of Deno improves I will be making tweaks and changes as I go along.",
  )
  .paragraph(
    "If anyone would like to contribute to the project please take a look at the ReadMe.md",
  )
  .paragraph("And yes I did generate this entire blog post with the module 😁")
  .paragraph(
    link(
      "Source",
      "https://github.com/JasonHughes94/deno-markdown/blob/master/examples/dev_blogPost.ts",
    ),
  )
  .paragraph(bold("Thanks for reading!"))
  .write("./examples/", "dev_blogPost");
