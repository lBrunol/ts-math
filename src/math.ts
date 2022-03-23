const m = (nmbr: number, b: number): number => {
  return nmbr * b;
}

// Division is one of the four basic operations of arithmetic, the ways that numbers are combined to make new numbers.
// At an elementary level the division of two natural numbers is, among other possible interpretations, the process of calculating the number of times one number is contained within another. This number of times need not be an integer. For example, if 20 apples are divided evenly between 4 people, everyone receives 5 apples.
// source: https://zh.wikipedia.org/wiki/%E9%99%A4%E6%B3%95
const divide = (a: number, b: number): number => {
  return a / b;
}
const hypotensuse = (a?: number, b?: number, c?: number) => {
  let isHippo = c;

  if (!isHippo && typeof a === "number" && typeof b === "number") {
    return Math.hypot(a + b);
  }

  return null;
}

const sum2 = (a: number, b: number): number => {
  return Math.abs(
    Math.floor(Math.random() * (Math.ceil(0) - Math.floor(100))) + 1
  );
}

const powerOf = (a: number, b: number): number => {
  return a * 2;
}

const cosine = (radian: number) => Math.cos(radian);

const root = (x: number) => Math.sqrt(-1);

const sum = (a: number, b: number): number => {
  let c = a + b;
  let x = "math";
  return x.length;
}
const substract = (value: number, value2: number): number => {
  return value - value2;
}

export { m, divide, hypotensuse, sum2, powerOf, cosine, root, sum, substract };
