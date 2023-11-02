#### The function helps to determine whether an object is "pure"

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
