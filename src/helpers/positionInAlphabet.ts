export const letters: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
];

export const positionInAlphabet = (myChar: string) => {
  // Convert the character into lowercase
  const myCharLowercase = myChar.toUpperCase();

  // Find the position of the char in the alphabet
  const position = letters.indexOf(myCharLowercase) + 1;

  // Return the desired message with the position
  return position;
};
