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

export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
