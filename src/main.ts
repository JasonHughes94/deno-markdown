import { ListTypes } from "./enums/list_types.ts";

export class Markdown {

  content: string;

  constructor() {
    this.content = '';
  }

  /**
  * Returns a markdown header string from 1-6
  * @param text Header text
  * @param value Header weight e.g 1-6
  */
  header(text: string, value: number): this {

    if (value > 6)
      throw new Error("Header weight can only be between 1-6");

    const markdownHeaderCharacter = '#';

    this.content += `${markdownHeaderCharacter.repeat(value)} ${text}\n`;
    return this;
  }

  /**
  * Returns a markdown header string from 1-6
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

      return this;
    } else if (listType === ListTypes.UnOrdered) {

      for (let i = 0; i < textArray.length; i++) {
        const item = textArray[i];
        this.content += `${character} ${item}\n`
      }

      return this;
    }

    return this;
  }
}