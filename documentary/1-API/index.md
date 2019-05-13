## API

The package is available by importing its default function:

```js
import preact from '@externs/preact'
```

The actual externs are found in the `type/externs.js` file which is referenced by the package in the `externs` field.

%~%

```## preact
```

The entry module, `src/index.js` of this package destructures the properties available on preact global variable, and exports them.

%EXAMPLE: src%

The usage is up to the developers to decide, but the package does not contain any functionality in itself, other than to provide the externs and the way to import preact in the code.

%EXAMPLE: example, ../src => @externs/preact%

%~%