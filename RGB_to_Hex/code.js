const doMath = (num) => {
  let hex = "0123456789abcdef";

  let x = Math.floor(num / 16);
  let y = num % 16;
  return hex[x] + hex[y];
};
function rgbToHex(rgb = "rgb(182, 0, 35)") {
  rgb = rgb.slice(4, -1);
  let [r, g, b] = rgb.split(",").map(Number);

  const color = "#" + doMath(r) + doMath(g) + doMath(b);
  return color;
}

console.log(rgbToHex());
