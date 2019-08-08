# ANGUS &mdash; ANcient eGyptian Utility for Symbols

A helpful "flashcard" utility for symbols in Gardiner's sign list. It is implemented entirely in javascript,
simply open [index.html](index.html) in your web browser of choice.

Hieroglyph glyphs are pulled from Wikipedia.

To add additional phrases into the dictionary so they will appear, add them to [uniliterals.js](uniliterals.js) as a dict in the
`uniliterals` array, with the following keys:

 * `hiero` - a list of symbols, identified by their ID in the Gardiner sign list (case-sensitive);
 * `translit` - the transliteration (literal, use the Unicode character in the list below for non-Roman characters).

Note the following Unicode characters used:

 * &#x1E25 - `\u1E25` (in the UI, type `h.`)
 * &#x1E2B - `\u1E2B` (in the UI, type `h)`)
 * &#x1E96 - `\u1E96` (in the UI, type `h_`)
 * &#x0161 - `\u0161` (in the UI, type `s<`)
 * &#x1E6F - `\u1E6F` (in the UI, type `t_`)
 * &#x1E0F - `\u1E0F` (in the UI, type `d_`)
 * &#x1E33 - `\u1E33` (in the UI, type `k.`)
 * &#xA723 - `\uA723` (in the UI, type `a`)
 * &#xA725 - `\uA725` (in the UI, type `c`)
 * &#x1EC9 - `\u1EC9` (in the UI, type `i`)
