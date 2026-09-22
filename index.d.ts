import type { CSL } from '@citation-js/core'

declare module '@citation-js/core' {
  namespace plugins {
    namespace input {
      interface Formats {
        '@pubmed/id': (input: string) => CSL,
        '@pubmed/pmcid': (input: string) => CSL
      }
    }
  }
}
