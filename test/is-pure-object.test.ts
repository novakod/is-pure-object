import { test, expect } from "vitest";
import { isPureObject } from "../src/is-pure-object";

test("Тестирование функции isPureObject", () => {
  expect(isPureObject(new Date()), "Тестирование на дате").toBe(false);
  expect(isPureObject([]), "Тестирование на массиве").toBe(false);
  expect(isPureObject(new Array()), "Тестирование на инстансе массива").toBe(false);
  expect(isPureObject(undefined), "Тестирование на undefined").toBe(false);
  expect(isPureObject(null), "Тестирование на null").toBe(false);
  expect(isPureObject(false), "Тестирование на типе boolean").toBe(false);
  expect(isPureObject(1), "Тестирование на типе number").toBe(false);
  expect(isPureObject("test"), "Тестирование на типе string").toBe(false);
  expect(
    isPureObject(() => {}),
    "Тестирование на коллбэке"
  ).toBe(false);
  expect(
    isPureObject(function () {}),
    "Тестирование на функции"
  ).toBe(false);
  expect(isPureObject({}), "Тестирование на объекте").toBe(true);
  expect(isPureObject(new Object()), "Тестирование на инстансе объекта").toBe(true);
});
