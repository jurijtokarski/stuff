# Formatting helpers

## Install

`npm i @jurijtokarski/calc` or `yarn add @jurijtokarski/calc`.

## `formatPrice`

```javascript
formatPrice(100.0981923876, "PLN"); // 100,10 zł (third param set based on browser locale)
formatPrice(100.0981923876, "USD"); // 100,10 USD (third param set based on browser locale)
formatPrice(100.0981923876, "USD", "en"); // $100.10
formatPrice(100.0981923876, "PLN", "uk"); // 100,10 PLN
formatPrice(100.0981923876, "PLN", "en"); // PLN 100.10
```

## Definitions

Feel free to check TypeScript's [definitions](https://github.com/jurijtokarski/stuff/blob/master/packages/format/index.d.ts) for the package.
