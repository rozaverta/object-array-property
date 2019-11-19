# object-array-property

> Object helper. Property array manipulation. 
> Creates, added items, deleted items, and more from an object property.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save object-array-property
```

## Usage example

```js
import {OpAdd, OpGet, OpRemove, OpDestroy} from "object-array-property";

const test = {};

OpAdd(test, "prop", 1);
OpAdd(test, "prop", 1);
OpAdd(test, "prop", 2);
console.log(test);
// >> {'prop':[1,2]}

OpRemove(test, "prop", 2);
console.log(test);
// >> {'prop':[1]}

OpDestroy(test, "prop");
console.log(test);
// >> {}

OpAdd(test, "logs", 1, 2, 3, 4, 5);
console.log(test);
// >> {'logs':[1,2,3,4,5]}

const logs = OpGet(test, "logs", true);
console.log('test:', test);
console.log('logs:', logs);
// >> test: {}
// >> logs: [1,2,3,4,5]
```

## Library components and functions

| **Function** | **Description** |
| --- | --- |
| `OpTest(object, name): Boolean` | Checks that the ``object`` property ``name`` exists and is an array. |
| `OpGet(object, name, destroy = false): Array` | Gets the ``name`` property of the ``object`` or creates an empty array and returns it. |
| `OpDestroy(object, name): object` | Deletes the property ``name`` from ``object``. |
| `OpIncludes(object, name, value): Boolean` | Checks that the ``value`` is included in the array. |
| `OpAdd(object, name, value, [value_2, ...value_n]): object` | Adds (pushes) the new ``value`` element(s) to the array. |
| `OpRemove(object, name, value, [value_2, ...value_n]): object` | Remove all ``value`` element(s) from array. |
| `OpLength(object, name): Number` | Gets array length. |
| `OpCopy(object, name): Array` | Copies array. |
