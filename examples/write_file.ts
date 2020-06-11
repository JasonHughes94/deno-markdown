import { Markdown } from "../mod.ts";

let markdown = new Markdown();

markdown
  .quote("My Quote")
  .write("./examples/", "test");
