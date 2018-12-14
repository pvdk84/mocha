"use strict"

describe("tests for calculator", function() {

  // normal test
  it("3 raised to power 3 is 27", function() {
    assert.equal(exponentiation(3, 3), 27);
  });

  // notice other notation function
  it("2 raised to power 4 is 16", () => {
    assert.equal(exponentiation(2, 4), 16);
  });

  // check isNaN
  it("for non integer the result is NaN", function() {
    assert.isNaN(exponentiation(2, "two"));
  });

  // check not equal
  it("5 times 4 should not equal 9", () => {
    assert.notEqual(multiplication(5, 4), 9);
  });

  it("5 times 4 should equal 20", () => {
    assert.equal(multiplication(5, 4), 20);
  });

  // use for loop
  for (let i = 0; i < 10; i++) {
    it(`5 plus ${i} is ${5+i}`, function() {
      let expected = 5 + i;
      assert.equal(addition(5, i), expected);
    });
  }

  it(`5 divided by 0 is Infinity`, function() {
    let expected = Infinity;
    assert.isTrue(division(5, 0) == expected);
  });

  it(`5 divided by 0 is not null`, function() {
    let expected = null;
    assert.isFalse(division(5, 0) == expected);
  });
  
});
