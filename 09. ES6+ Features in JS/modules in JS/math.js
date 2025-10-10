export function add(a, b) {
  return a + b;
}

export const PI = 3.1416;

//You can also use default export if exporting only one main thing:

export default function square(x) {
  return x * x;
}
// Note: You can have only one default export per module