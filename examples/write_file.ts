import { Markdown } from "https://deno.land/x/deno_markdown@v0.2/mod.ts"

const markdown = new Markdown()

await markdown
  .quote("My Quote")
  .write("./examples/", "test")
