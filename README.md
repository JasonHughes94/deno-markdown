# Deno-Markdown

Create markdown files or snippets using deno 🦕

## Usage

### Basic example

```javascript
import { Markdown, ListTypes } from 'ADD DENO URL ONCE MERGED';

let markdown = new Markdown();

markdown
  .header('My Header', 1)
  .list(['Item 1', 'Item 2'], ListTypes.Ordered)
  .quote('My Quote');

console.log(markdown.content);
```

### Write out to a markdown file

```javascript
import { Markdown, ListTypes } from 'ADD DENO URL ONCE MERGED';

let markdown = new Markdown();

markdown
  .quote('My Quote')
  .write('./examples/', 'test');
```

### Further examples

Please see the files in [the examples folder](./examples/);

## Running the tests

To run the tests run `deno test -A`

## Contributing

Any help is greatly welcome all you need to do it put in a PR with the changes and ensure that you have added a test(s) for the feature.

## Authors

* **Jason Hughes** - *Initial work* - [Github](https://github.com/JasonHughes94)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgements 

* **Titus Wormer** - [markdown-table](https://github.com/wooorm/markdown-table)
