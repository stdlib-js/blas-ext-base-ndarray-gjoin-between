<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gjoinBetween

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gjoinBetween from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gjoin-between@deno/mod.js';
```

#### gjoinBetween( arrays )

Returns a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.

```javascript
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';

var xbuf = [ 1, 2, 3, 4 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var prefix = scalar2ndarray( 'op: ', {
    'dtype': 'generic'
});

var suffix = scalar2ndarray( '', {
    'dtype': 'generic'
});

var sbuf = [ ' + ', ' - ', ' != ' ];
var separators = new ndarray( 'generic', sbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var out = gjoinBetween( [ x, prefix, suffix, separators ] );
// returns 'op: 1 + 2 - 3 != 4'
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing a prefix string.
    -   a zero-dimensional ndarray containing a suffix string.
    -   a one-dimensional ndarray containing separator strings.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the input ndarray is empty, the function returns the prefix and suffix joined together.
-   The `separators` ndarray is assumed to have at least `N-1` elements (i.e., equal to the number of "gaps" between consecutive elements), where `N` is the number of elements in the input ndarray.
-   If an array element is either `null` or `undefined`, the function serializes the element as an empty string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import filled from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import gjoinBetween from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gjoin-between@deno/mod.js';

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var prefix = scalar2ndarray( '[ ', {
    'dtype': 'generic'
});

var suffix = scalar2ndarray( ' ]', {
    'dtype': 'generic'
});

var sbuf = filled( ' | ', xbuf.length - 1 );
var separators = new ndarray( 'generic', sbuf, [ sbuf.length ], [ 1 ], 0, 'row-major' );

var out = gjoinBetween( [ x, prefix, suffix, separators ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-gjoin-between.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-gjoin-between

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-gjoin-between/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-gjoin-between?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-gjoin-between.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-gjoin-between/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/main/LICENSE

</section>

<!-- /.links -->
