function repeatVowels(str) {
  const vowels = "aeuoiAEUIO";
  counter = 0;
  return str
    .split("")
    .map((s) => {
      if (!vowels.includes(s)) {
        return s;
      }
      counter++;

      s = s.padEnd(counter, s.toLowerCase());
      return s;
    })
    .join("");
}

console.log(repeatVowels("adrEtu"));
