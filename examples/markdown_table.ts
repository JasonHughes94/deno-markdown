import { Markdown } from "../mod.ts";

let markdown = new Markdown();

//Table with no options
markdown
  .table([
    ['Branch', 'Commit'],
    ['master', '0123456789abcdef'],
    ['staging', 'fedcba9876543210']
  ]);

//Table wih alignment options
markdown
  .table([
    ['Branch', 'Commit'],
    ['master', '0123456789abcdef'],
    ['staging', 'fedcba9876543210']
  ], { align: ['l', 'c', 'r'] });

console.log(markdown.content);