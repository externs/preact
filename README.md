# @externs/preact

[![npm version](https://badge.fury.io/js/@externs/preact.svg)](https://npmjs.org/package/@externs/preact)

`@externs/preact` is The Externs For Preact.

```sh
yarn add @externs/preact
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`preact(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@externs/preact.Config`](#type-_@externs/preactconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import preact from '@externs/preact'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `preact(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@externs/preactconfig">`_@externs/preact.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import preact from '@externs/preact'

(async () => {
  const res = await preact({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco/depack

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>