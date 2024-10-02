import { expect } from "chai";
import { describe, it } from "mocha";
import { factorial, getMostPopularPlaces, removeWords } from "./code.js";

/** Run npm i mocha chai to install mocha and chai */
/** Run npx mocha your.test.file to run */
describe("Prog 1 tests", function () {
  it("should return 125 if n = 5", function () {
    expect(factorial(5)).to.eq(120);
  });

  it("should return 1 when n is 0", function () {
    expect(factorial(0)).to.eq(1);
  });

  it("should return 'Hello, est test' if original='Hello, ceci est un test' et wordsToRemove=[' ceci', ' un']", function () {
    const original = "Hello, ceci est un test";
    const wordsToRemove = [" ceci", " un"];
    expect(removeWords(original, wordsToRemove)).to.eq("Hello, est test");
  });

  it("should return 'Hello Java' if original='Hello Java' et wordsToRemove=[' java']", function () {
    const original = "Hello Java";
    const wordsToRemove = [" java"];
    expect(removeWords(original, wordsToRemove)).to.eq("Hello Java");
  });

  it("should return 'Itaosy Analamahitsy' if places=['Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy']", function () {
    const places = [
      "Analamahitsy",
      "Analamahitsy",
      "Itaosy",
      "Behoririka",
      "Itaosy",
      "Itaosy",
    ];
    expect(getMostPopularPlaces(places)).to.eq("Itaosy Analamahitsy");
  });

  it("sould not have duplicated first and second popular place and return -1", function(){
    const places = [
        "Analamahitsy",
        "Analamahitsy",
        "Itaosy",
        "Analamahitsy",
        "Behoririka",
        "Itaosy",
        "Itaosy",
      ];
    expect(getMostPopularPlaces(places)).to.eq(-1);
  })
});
