## Why Deno?

Like the rest of the Node community I've been jumping on the Deno band wagon and for good reason!

I could create a fairly large list of why I like Deno however I'd recommend everyone read [The Deno Handbook](https://flaviocopes.com/deno/) by Flavio Copes and see for yourself.

## So what is deno-markdown?

deno-markdown is a module that allows a developer to quickly create markdown content and files using TS function chaining.

### Examples

Create a Markdown file with a 2 headings, a paragraph, and a bullet point list of items.

```typescript

import { Markdown, ListTypes } from 'https://deno.land/x/deno_markdown/mod.ts';

let markdown = new Markdown();

await markdown
    .header("Hello Dev community!", 1) // This will generate # Hello Dev community!
    .paragraph("Here is an example of some text under the heading")
    .header("Another heading!", 2) // This will generate ## Another heading!
    .list(["Item 1", "Item 2"], ListTypes.UnOrdered, "*") // Character can be set to *, -, or + 
    .write("./folder/", "fileName"); // This will write the content out to ./folder/fileName.md 
  
```

Output:

```

# Hello Dev community!

Here is an example of some text under the heading

## Another heading!

* Item 1
* Item 2
  
```

Create markdown tables

```typescript

import { Markdown } from "https://deno.land/x/deno_markdown/mod.ts";

let markdown = new Markdown();

await markdown
  .table([
    ["Branch", "Commit"],
    ["master", "0123456789abcdef"],
    ["staging", "fedcba9876543210"],
  ])
  .write("./examples/", "table");
  
```

Output:

```

| Branch  | Commit           |
| ------- | ---------------- |
| master  | 0123456789abcdef |
| staging | fedcba9876543210 |
  
```

You can also use the built in string extensions to enhance your markdown files

```typescript

import { Markdown, bold, italics } from 'https://deno.land/x/deno_markdown/mod.ts';

let markdown = new Markdown();

await markdown
  .header("Hello Dev community!", 1)
  .paragraph(`You can inline extensions like ${bold('bold')} or ${italics('italics')}`)
  .write("./examples/", "fileName");
  
```

Output:

```

# Hello Dev community!

You can inline extensions like **bold** or _italics_
  
```

[Further Examples](https://github.com/JasonHughes94/deno-markdown/tree/master/examples)

## What's next?

I will be looking to improve the code quality overall and remove the dependency on [markdown-table](https://github.com/wooorm/markdown-table).

No doubt as my knowledge of Deno improves I will be making tweaks and changes as I go along.

If anyone would like to contribute to the project please take a look at the ReadMe.md

And yes I did generate this entire blog post with the module 😁

[Source](https://github.com/JasonHughes94/deno-markdown/blob/master/examples/dev_blogPost.ts)

**Thanks for reading!**

