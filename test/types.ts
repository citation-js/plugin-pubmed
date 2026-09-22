import { plugins } from '@citation-js/core'
import type { CSL } from '@citation-js/core'
import '..'

const b = plugins.input.data('PMC12345', '@pubmed/pmcid')

type Expect<T extends true> = T
type IsCsl<T> = T extends CSL ? true : false

// @ts-ignore
type Tests = [
  Expect<IsCsl<typeof b>>
]
