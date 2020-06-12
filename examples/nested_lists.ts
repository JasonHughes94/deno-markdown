import { Markdown, ListTypes } from "https://deno.land/x/deno_markdown/mod.ts";

let markdown = new Markdown();

markdown
  .header("My Header", 1)
  .list(["Item 1", "Item 2"], ListTypes.Ordered)
  .list(["Item 1", "Item 2"], ListTypes.Ordered, undefined, true);

console.log(markdown.content);
