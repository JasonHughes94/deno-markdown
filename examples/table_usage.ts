import { Markdown } from "https://deno.land/x/deno_markdown@v0.2/mod.ts"

const markdown = new Markdown()

//Table with no options
markdown
  .table([
    ["Branch", "Commit"],
    ["master", "0123456789abcdef"],
    ["staging", "fedcba9876543210"],
  ])

//Table wih alignment options
markdown
  .table([
    ["Branch", "Commit"],
    ["master", "0123456789abcdef"],
    ["staging", "fedcba9876543210"],
  ], { align: ["l", "c", "r"] })

console.log(markdown.content)
