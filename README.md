This plugin makes use of the [Literature Citation Exporter](https://api.ncbi.nlm.nih.gov/lit/ctxp) web service,
which takes a PubMed or PubMed Central identifier and returns CSL.

## Install

```js
npm install @citation-js/plugin-pubmed
```

## Use

Install the plugin by `require`-ing it:

```js
require('@citation-js/plugin-pubmed')
```

It can then be used in two ways. PubMed Central identifiers are easy to recognize
and the following code can be used:

```js
require('@citation-js/plugin-csl')
citejs = require('@citation-js/plugin-pubmed')

citejs.Cite.async('PMC6613236')
  .then(Cite =>
    console.log(Cite.format('bibliography', {template: 'vancouver'}))
  )

```

For PubMed identifiers, which are just numbers, one way is to just tell it is a
PubMed identifier:

```js
require('@citation-js/plugin-csl')
citejs = require('@citation-js/plugin-pubmed')

citejs.Cite.async('31209238', {forceType: '@pubmed/id'})
  .then(Cite =>
    console.log(Cite.format('bibliography', {template: 'vancouver'}))
  )
```

## Formats

Formats and other features added by this plugin.

### Input

As input it recognizes PubMed identifiers if prefixed with `pmid:`. Of course, you can also indicate in your
source code that the PubMed integer is an PubMed identifier. If prefixed with `PMC`, then the identifier
is recognized as a PubMed Central identifier.

### Output

The output is CSL.
