import { ListTypes } from "./enums/list_types.ts";

/** Create Markdown content and files. */
export class Markdown {

  content: string;

  constructor() {
    this.content = '';
  }

  /**
  * Adds a markdown header string from 1-6 to the content
  * @param text Header text
  * @param value Header weight e.g 1-6
  */
  header(text: string, value: number): this {

    if (value > 6)
      throw new Error("Header weight can only be between 1-6");

    const markdownHeaderCharacter = '#';

    this.content += `${markdownHeaderCharacter.repeat(value)} ${text}\n\n`;
    return this;
  }

  //TODO: Add sub lists
  /**
  * Adds an markdown list either ordered or unordered to the content
  * @param textArray Array of items to bue put into a list
  * @param listType Ordered or Unordered list defaults to unordered
  * @param character Desired character for unordered list defaults to `-`
  */
  list(textArray: string[], listType: ListTypes = ListTypes.UnOrdered, character: string = '-'): this {
    const unorderedListCharacters = ['-', '+', '*'];

    if (!unorderedListCharacters.includes(character))
      throw new Error("Please supply a valid markdown character for unordered lists");

    if (listType === ListTypes.Ordered) {

      for (let i = 0; i < textArray.length; i++) {
        const item = textArray[i];
        this.content += `${i + 1}. ${item}\n`;
      }

      this.content += '\n';
      return this;
    } else if (listType === ListTypes.UnOrdered) {

      for (let i = 0; i < textArray.length; i++) {
        const item = textArray[i];
        this.content += `${character} ${item}\n`
      }

      this.content += '\n';
      return this;
    }

    return this;
  }

  /**
  * Adds a markdown quote to the content
  * @param text content you wish to be quoted
  */
  quote(text: string): this {
    this.content += `> ${text}\n\n`;
    return this;
  }

  /**
  * Adds a paragraph of text to the content
  * @param text content you wish to be written out
  */
  paragraph(text: string): this {
    this.content += `${text}\n\n`
    return this;
  }

  /**
  * Adds a inline code block to the content
  * @param text content you wish to be made inline
  */
  inlineCode(text: string): this {
    this.content += `\`${text}\``;
    return this;
  }

  /**
  * Writes the content to a markdown file you do not need to supply a .md
  * @param path Location you wish to create the file
  * @param fileName The name of the file
  * @param content The content you wish to write to the file. This defaults to the chained content
  */
  async write(path: string, fileName: string, content: string = this.content) {
    const file = await Deno.create(`${path}${fileName}.md`);
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    await Deno.write(file.rid, data); // 11
    Deno.close(file.rid);
  }
}