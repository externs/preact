# @externs/preact

%NPM: @externs/preact%

`@externs/preact` is The Externs For Preact. It can be used to import _Preact_ in code, knowing that the `preact` variable will be available in the global scope of the browser. For the developer experience, the code should still use `import { h } from 'preact'`, but use some kind of tool to prepare source code for compiling with Google Closure Compiler, for example, [_Depack_](https://artdecocode.com/depack/).

```sh
yarn add @externs/preact
```

%EXAMPLE: types/externs%

## Table Of Contents

%TOC%

%~%