const sum = (addendOne: number, addendTwo: number): number => {
  if(typeof addendOne === "number" && typeof addendTwo === "number"){
    return addendOne + addendTwo;
  }
  return NaN;
};

const sumAny = (addendOne: any, addendTwo: any): number => parseFloat(addendOne) + parseFloat(addendTwo);

const substract = (minuend: number, subtrahend: number): number => {
  if(typeof minuend === "number" && typeof subtrahend === "number"){
    return minuend - subtrahend;
  }
  return NaN;
};

const multiply = (factorOne: number, factorTwo: number): number => { 
  if(typeof factorOne === "number" && typeof factorTwo === "number"){  
    return factorOne * factorTwo;
  }
  return NaN;
};

const divide = (dividend: number, divisor: number): number => dividend / divisor;

const root = (x: number) => {
  if(typeof x === "number"){  
    return Math.sqrt(x);
  }
  return NaN;
}

const powerOf = (base: number, expoent: number): number => { 
  if(typeof base === "number" && typeof expoent === "number"){  
    return Math.pow(base, expoent);  
  }
  return NaN;
};

const cosine = (radian: number) => {
  if(typeof radian === "number"){  
    return Math.cos(radian);
  }
  return NaN;
};

const hypotenuse = (a?: number, b?: number) => {
  if (typeof a === "number" && typeof b === "number") {
    return Math.hypot(a, b);
  }
  return null;
}

export { multiply, divide, hypotenuse, sumAny, powerOf, cosine, root, sum, substract };
