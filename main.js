// The function outputs a string with numbers from the largest number to the smallest. 
// It is known that both A and B are greater than or equal to 1, but it is not known which is greater.
function cycle(a, b) {
  let x = "";
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = max; i >= min; i--) {
    x += i + " ";
  }
  return x;
}
