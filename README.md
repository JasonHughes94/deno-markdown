# Deno-Markdown

Create markdown files or snippets using deno 🦕

![ci](https://github.com/JasonHughes94/deno-markdown/workflows/ci/badge.svg)

## Usage

### Basic example

```javascript
import { ListTypes, Markdown } from "https://deno.land/x/deno_markdown/mod.ts"

const markdown = new Markdown()

markdown
  .header("My Header", 1)
  .list(["Item 1", "Item 2"], ListTypes.Ordered)
  .quote("My Quote")

console.log(markdown.content)
```

### Write out to a markdown file

```javascript
import { ListTypes, Markdown } from "https://deno.land/x/deno_markdown/mod.ts"

const markdown = new Markdown()

await markdown
  .quote("My Quote")
  .write("./examples/", "test")
```

### Further examples

Please see the files in [the examples folder](./examples/) or take a look at the
[wiki](https://github.com/JasonHughes94/deno-markdown/wiki)

## Running the tests

To run the tests run `deno test -A`

## Contributing

Any help is greatly welcome all you need to do it put in a PR with the changes
and ensure that you have added a test(s) for the feature.

## Authors

- **Jason Hughes** - _Initial work_ - [Github](https://github.com/JasonHughes94)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details

## Acknowledgements

- **Titus Wormer** - [markdown-table](https://github.com/wooorm/markdown-table)
