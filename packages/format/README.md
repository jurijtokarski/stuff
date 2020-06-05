# Formatting helpers

## Install

`npm i @jurijtokarski/format` or `yarn add @jurijtokarski/format`.

## `formatPrice`

```javascript
formatPrice(100.0981923876, "PLN"); // 100,10 zł (third param set based on browser locale)
formatPrice(100.0981923876, "USD"); // 100,10 USD (third param set based on browser locale)
formatPrice(100.0981923876, "USD", "en"); // $100.10
formatPrice(100.0981923876, "PLN", "uk"); // 100,10 PLN
formatPrice(100.0981923876, "PLN", "en"); // PLN 100.10
```

## `formatPrice`

```javascript
capitalize("hello"); // Hello
capitalize("hELLO"); // Hello
capitalize("hEllO"); // Hello
capitalize("HELLO"); // Hello
```

## Definitions

Feel free to check TypeScript's [definitions](https://github.com/jurijtokarski/stuff/blob/master/packages/format/index.d.ts) for the package.
