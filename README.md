#### The function helps to determine whether an object is "pure"

![tests](https://img.shields.io/github/actions/workflow/status/novakod/is-pure-object/tests.yml)
[![npm](https://img.shields.io/npm/v/@novakod/is-pure-object)](https://www.npmjs.com/package/@novakod/is-pure-object)
![license](https://img.shields.io/npm/l/@novakod/is-pure-object)

Here is an example:

```ts
 isPureObject(new Date()) // false
 isPureObject([]) // false
 isPureObject(new Array()), // false
 isPureObject(undefined) // false
 isPureObject(null) // false
 isPureObject(false) // false
 isPureObject(1) // false
 isPureObject("test") // false
 isPureObject(() => {}) // false
 isPureObject(function () {}) // false
 isPureObject({}) // true
 isPureObject(new Object()), // true
```
