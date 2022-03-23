import {
  powerOf,
  root,
  multiply,
  divide,
  hypotenuse,
  substract,
  sum,
  cosine,
  sumAny,
} from "../src/math";

import assert from "assert";

describe("sum tests", function() {
  it("2 + 2 should return 4", function () {
    assert.strictEqual(sum(2, 2), 4);
  });
  it("10 + 10 shouldn't return 50", function () {
    assert.notStrictEqual(sum(10, 10), 50);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(sum(null, null), NaN);
    assert.strictEqual(sum(undefined, undefined), NaN);
  });
});

describe("sumAny tests", function() {
  it("1 + 1 should return 2", function () {
    assert.strictEqual(sumAny(1, 1), 2);
  });
  it("'1' + '1' return 2", function () {
    assert.strictEqual(sumAny(1, 1), 2);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(sumAny(null, null), NaN);
    assert.strictEqual(sumAny(undefined, undefined), NaN);
  });
});

describe("substract tests", function() {
  it("2 - 2 should return 0", function () {
    assert.strictEqual(substract(2, 2), 0);
  });
  it("6 - 3 shouldn't return 0", function () {
    assert.notStrictEqual(substract(6, 3), 0);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(substract(null, null), NaN);
    assert.strictEqual(substract(undefined, undefined), NaN);
  });
});

describe("multiply tests", function() {
  it("2 * 2 should return 4", function () {
    assert.strictEqual(multiply(2, 2), 4);
  });
  it("2 * 3 shouldn't return 4", function () {
    assert.notStrictEqual(multiply(2, 3), 4);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(multiply(null, null), NaN);
    assert.strictEqual(multiply(undefined, undefined), NaN);
  });
});

describe("divide tests", function() {
  it("10 / 5 should return 2", function () {
    assert.strictEqual(divide(10, 5), 2);
  });
  it("20 / 2 shouldn't return 1", function () {
    assert.notStrictEqual(divide(20, 2), 1);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(divide(null, null), NaN);
    assert.strictEqual(divide(undefined, undefined), NaN);
  });
});

describe("hypotenuse tests", function() {
  it("45 and 20 should return hypotenuse 49.244", function () {
    const hypotResult = 49.24428900898052;
    assert.strictEqual(hypotenuse(45, 20), hypotResult);
  });
  it("45 and 20 shouldn't return hypotenuse 10", function () {
    assert.notStrictEqual(hypotenuse(45, 20), 10);
  });
  it("not number values should return null", function () {
    assert.strictEqual(hypotenuse(), null);
    assert.strictEqual(hypotenuse(null, null), null);
  });
});

describe("powerOf tests", function() {
  it("7 to the power of 2 return 49", function () {
    assert.strictEqual(powerOf(7, 2), 49);
  });
  it("64 to the power of 2 not return 10", function () {
    assert.notStrictEqual(powerOf(64, 2), 10);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(powerOf(null, null), NaN);
    assert.strictEqual(powerOf(undefined, undefined), NaN);
  });
});

describe("cosine tests", function() {
  it("6 cosine is always that number", function () {
    assert.strictEqual(typeof cosine(6), "number");
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(cosine(null), NaN);
    assert.strictEqual(cosine(undefined), NaN);
  });
});

describe("root tests", function () {
  it("2 square root is not 4", function () {
    assert.notStrictEqual(root(2), 4);
  });
  it("25 square root is 5", function () {
    assert.strictEqual(root(25), 5);
  });
  it("not number values should return isNaN", function () {
    assert.strictEqual(root(null), NaN);
    assert.strictEqual(root(undefined), NaN);
  });
});
