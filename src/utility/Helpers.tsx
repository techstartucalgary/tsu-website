/**
 * Splits string text into separate <p> elements for every new line element.
 *
 * @param text: string
 * @returns parsed text: JSX.Element[]
 */
export const NewlineText = (text: string) => {
  const oldText = text;
  const newText = oldText.split("\n").map((str) => <p>{str}</p>);

  return newText;
};
