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
import {OpAdd, OpRemove, OpDestroy} from "object-array-property";

const test = {};

OpAdd(test, "prop", 1);
OpAdd(test, "prop", 1);
OpAdd(test, "prop", 2);
console.log(test);
// >> {'test':[1,2]}

OpRemove(test, "prop", 2);
console.log(test);
// >> {'test':[1]}

OpDestroy(test, "prop");
console.log(test);
// >> {}
```

## Library components and functions

| **Function** | **Description** |
| --- | --- |
| `ObTest(object, name): Boolean` | Checks that the ``object`` property ``name`` exists and is an array. |
| `ObGet(object, name): Array` | Gets the ``name`` property of the ``object`` or creates an empty array and returns it. |
| `OpDestroy(object, name): object` | Deletes the property ``name`` from ``object``. |
| `OpIncludes(object, name, value): Boolean` | Checks that the ``value`` is included in the array. |
| `OpAdd(object, name, value): object` | Adds (pushes) the new ``value`` element to the array. |
| `OpRemove(object, name, value): object` | Remove all ``value`` from array. |
| `OpLength(object, name): Number` | Gets array length. |
| `OpCopy(object, name): Array` | Copies array. |
