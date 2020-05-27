# Math and arrays calculation helpers

## Install

`npm i @jurijtokarski/calc` or `yarn add @jurijtokarski/calc`.

## `round`

```javascript
round(2.98, 0); // => 3
round(4005, 4); // => 4005.0000
```

## `sum`

```javascript
sum([1, 2, 3, 4]); // => 10
sum([6, 12, 4]); // => 22
```

## `average`

```javascript
average([1, 2, 3, 4]); // => 2.5
average([6, 12, 4]); // => 7.33
```

## `group`

```javascript
group([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
average([6, 12, 4], 2); // => [[6, 12], [4]]
```

## `max` & `min`

```javascript
min([1, 2, 3, 4]); // => 1
max(6, 12, 4); // => 12
```

## `unique`

```javascript
unique([0, 0, 1, 2, 2, 3, 4]); // => [0, 1, 2, 3, 4]
```

## `ofLength`

```javascript
ofLength(3); // => [undefined, undefined, undefined] 
```

## `frames`

```javascript
frames(0, 100, 10); // => [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]]
frames(0, 70, 8); // => [[0, 8], [8, 16], [16, 24], [24, 32], [32, 40], [40, 48], [48, 56], [56, 64]],
frames(0, 70, 8, true); // => [[0, 8], [8, 16], [16, 24], [24, 32], [32, 40], [40, 48], [48, 56], [56, 64], [64, 70]],
```

## `randomInArray`

```javascript
randomInArray([1, 2, 3, 4, 5]); // => 3
randomInArray([1, 2, 3, 4, 5]); // => 1
randomInArray([1, 2, 3, 4, 5]); // => 5
randomInArray([1, 2, 3, 4, 5]); // => 3
randomInArray([1, 2, 3, 4, 5]); // => 5
```

## `randomInRange`

```javascript
randomInRange(0, 1); // => 0
randomInRange(0, 1); // => 1
randomInRange(0, 1, 2); // => 0.87
randomInRange(0, 1, 2); // => 0.02
randomInRange(4, 10); // => 9
randomInRange(4, 10); // => 4
randomInRange(4, 10, 3); // => 7.689
randomInRange(4, 10, 3); // => 9.448
```

## Definitions

Feel free to check TypeScript's [definitions](https://github.com/jurijtokarski/stuff/blob/master/packages/calc/index.d.ts) for the package.
