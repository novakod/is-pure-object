import { test, expect } from "vitest";
import { isPureObject } from "../src/is-pure-object";

test("Testing the isPureObject function", () => {
  expect(isPureObject(new Date()), "testing by date").toBe(false);
  expect(isPureObject([]), "testing by array").toBe(false);
  expect(isPureObject(new Array()), "testing by array instance").toBe(false);
  expect(isPureObject(undefined), "testing by undefined").toBe(false);
  expect(isPureObject(null), "testing by null").toBe(false);
  expect(isPureObject(false), "testing by boolean").toBe(false);
  expect(isPureObject(1), "testing by number").toBe(false);
  expect(isPureObject("test"), "testing by string").toBe(false);
  expect(
    isPureObject(() => {}),
    "testing by callback"
  ).toBe(false);
  expect(
    isPureObject(function () {}),
    "testing by function"
  ).toBe(false);
  expect(isPureObject({}), "testing by object").toBe(true);
  expect(isPureObject(new Object()), "testing by object instance").toBe(true);
});
