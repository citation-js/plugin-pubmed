import { utils } from '@citation-js/core'

export const ref = '@pubmed'
export const formats = {
  // fetch from API
  '@pubmed/id': {
    parseAsync (id) {
      const url = `https://example.com/api/${id}`
      const headers = {}

      return utils.fetchFileAsync(url, { headers })
    },
    parseType: {
      dataType: 'String',
      predicate: /^Q\d+$/
    }
  },

  // translate to CSL-JSON
  '@pubmed/record': {
    parse (record) {

    },
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: {
        props: 'source',
        value: 'https://example.com'
      }
    }
  }
}

export { ref, formats }
