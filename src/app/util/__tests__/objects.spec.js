import { objectToArrayOfValues } from "../objects";

test("should map to an empty array", () => {
  expect(objectToArrayOfValues({})).toEqual([]);
});

test("should map to an array of values", () => {
  expect(objectToArrayOfValues({ a: "a", b: "b" })).toEqual(["a", "b"]);
});
