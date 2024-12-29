import {
  ListTypes,
  Markdown,
} from "https://deno.land/x/deno_markdown@v0.2/mod.ts"

const markdown = new Markdown()

markdown
  .header("My Header", 1)
  .list(["Item 1", "Item 2"], ListTypes.Ordered)
  .list(["Item 1", "Item 2"], ListTypes.Ordered, undefined, true)

console.log(markdown.content)
