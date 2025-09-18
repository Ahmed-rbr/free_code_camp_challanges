function isPangram(sentence, letters) {
  let uniqueLetters = [];
  let chars = ".,!?@#%^&*()__-=+-/><'}{}][|";
  for (const letter of sentence) {
    uniqueLetters.push(letter.toLowerCase());
  }
  uniqueLetters = [
    ...new Set(
      uniqueLetters.filter(
        (unique) => unique !== " " && !chars.includes(unique)
      )
    ),
  ];

  if (letters.trim().split("").length !== uniqueLetters.length) {
    return false;
  }
  return letters
    .split("")
    .every((elm) => uniqueLetters.includes(elm.toLowerCase()));
}

console.log(
  isPangram(
    "The quick brown fox jumps over the lazy dog.",
    "abcdefghijklmnopqrstuvwxyz"
  )
);
