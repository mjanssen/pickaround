# `pickaround(num, range)`

A tiny utility to pick numbers around a given number, based on a given range.

### Usage

`pickaround(number, range, [negative])`

```
pickAround(8, 5) === [6, 7, 8, 9, 10];

pickAround(1, 5) === [-1, 0, 1, 2, 3];

pickAround(1, 5, false) === [0, 1, 2, 3];
```

### Licence

[MIT](https://oss.ninja/mit/mjanssen/)
