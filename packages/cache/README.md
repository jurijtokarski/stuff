# In-memory cache class

```javascript

const cache = new Cache();

cache.get("example"); // => { value: null, status: 0 }

cache.set("example", [1, 2, 3], getMinutesInMS(10));

cache.get("example"); // => { value: [1, 2, 3], status: 2 }

// after 10 minutes

cache.get("example"); // => { value: [1, 2, 3], status: 1 }
```

## Statuses

- `0` means value was not set yet
- `1` means value was set, but was expired
- `2` means freash value

## Definitions

Feel free to check TypeScript's [definitions](https://github.com/jurijtokarski/stuff/blob/master/packages/cache/index.d.ts) for package.
