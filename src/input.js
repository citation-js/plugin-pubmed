import { utils } from '@citation-js/core'

export const ref = '@pubmed'
export const formats = {
  // fetch from API
  '@pubmed/id': {
    parseAsync (id) {
      const url = `https://api.ncbi.nlm.nih.gov/lit/ctxp/v1/pubmed/?format=csl&id=${id}`
      const headers = {}

      return utils.fetchFileAsync(url, { headers })
    },
    parseType: {
      dataType: 'String',
      predicate: /^pmid:\d+$/
    }
  },
  '@pubmed/pmcid': {{
    parseAsync (id) {
      const url = `https://api.ncbi.nlm.nih.gov/lit/ctxp/v1/pmc/?format=csl&id=${id}`
      const headers = {}

      return utils.fetchFileAsync(url, { headers })
    },
    parseType: {
      dataType: 'String',
      predicate: /^PMC\d+$/
    }
  }
}

export { ref, formats }
