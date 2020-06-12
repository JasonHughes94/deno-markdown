import { Markdown } from "https://deno.land/x/deno_markdown/mod.ts";

let markdown = new Markdown();

await markdown
  .quote("My Quote")
  .write("./examples/", "test");
