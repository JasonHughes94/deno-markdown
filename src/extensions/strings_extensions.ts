/**
* Creates a string with italics
* @param text The text you wish to be made italic
* @param style The style you wish to use for italics defaults to `_`
* @returns {string} A string value with italic characters on both sides
*/
export function italics(text: string, style: string = '_'): string {
  const markdownItalicCharacters = ['_', '*'];

  if (!markdownItalicCharacters.includes(style))
    throw new Error('Please use the correct markdown characters');

  return style + text + style;
}