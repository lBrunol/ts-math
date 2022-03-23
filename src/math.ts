const sum = (addendOne: number, addendTwo: number): number => addendOne + addendTwo;

const sumAny = (addendOne: any, addendTwo: any): number => parseFloat(addendOne) + parseFloat(addendTwo)

const substract = (minuend: number, subtrahend: number): number => minuend - subtrahend;

const multiply = (factorOne: number, factorTwo: number): number => factorOne * factorTwo;

const divide = (dividend: number, divisor: number): number => dividend / divisor;

const root = (x: number) => Math.sqrt(x);

const powerOf = (base: number, expoent: number): number => Math.pow(base, expoent);

const cosine = (radian: number) => Math.cos(radian);

const hypotenuse = (a?: number, b?: number) => {
  if (typeof a === "number" && typeof b === "number") {
    return Math.hypot(a, b);
  }
  return null;
}

export { multiply, divide, hypotenuse, sumAny, powerOf, cosine, root, sum, substract };
