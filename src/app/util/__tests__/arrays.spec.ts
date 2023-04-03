import { arrayToObjectLiteral } from "../arrays";

test("should map to an empty object", () => {
  expect(arrayToObjectLiteral()).toEqual({});
  expect(arrayToObjectLiteral([])).toEqual({});
});

test("should map to a proper object", () => {
  expect(
    arrayToObjectLiteral([
      { id: "1", name: "obj1" },
      { id: "2", name: "obj2" },
    ])
  ).toEqual({
    1: { id: "1", name: "obj1" },
    2: { id: "2", name: "obj2" },
  });
});
