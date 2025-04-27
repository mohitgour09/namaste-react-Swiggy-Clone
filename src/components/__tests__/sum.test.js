import { sum } from "../sum";

test("This is to test sum ", () => {
  const result = sum(4, 3);

  // Assertion
  expect(result).toBe(7);
});
