export const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

export const positionInAlphabet = (myChar: string) => {
  // Convert the character into lowercase
  const myCharLowercase = myChar.toLowerCase();

  // Find the position of the char in the alphabet
  const position = letters.indexOf(myCharLowercase) + 1;

  // Return the desired message with the position
  return position;
};
