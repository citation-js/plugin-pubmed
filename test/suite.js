/* eslint-env mocha */

import '../src/'

import assert from 'assert'
import { plugins } from '@citation-js/core'

const apiTests = [
  {
    name: 'pubmed',
    input: 'pmid:31209238',
    output: [{
      'source': 'PubMed',
      'accessed': {
        'date-parts': [
          [
            2019,
            8,
            16
          ]
        ]
      },
      'id': 'pmid:31209238',
      'title': 'Community assessment to advance computational prediction of cancer drug combinations in a pharmacogenomic screen',
      'author': [
        {
          'family': 'Menden',
          'given': 'Michael P'
        },
        {
          'family': 'Wang',
          'given': 'Dennis'
        },
        {
          'family': 'Mason',
          'given': 'Mike J'
        },
        {
          'family': 'Szalai',
          'given': 'Bence'
        },
        {
          'family': 'Bulusu',
          'given': 'Krishna C'
        },
        {
          'family': 'Guan',
          'given': 'Yuanfang'
        },
        {
          'family': 'Yu',
          'given': 'Thomas'
        },
        {
          'family': 'Kang',
          'given': 'Jaewoo'
        },
        {
          'family': 'Jeon',
          'given': 'Minji'
        },
        {
          'family': 'Wolfinger',
          'given': 'Russ'
        },
        {
          'family': 'Nguyen',
          'given': 'Tin'
        },
        {
          'family': 'Zaslavskiy',
          'given': 'Mikhail'
        },
        {
          'family': 'AstraZeneca-Sanger Drug Combination DREAM Consortium'
        },
        {
          'family': 'Jang',
          'given': 'In Sock'
        },
        {
          'family': 'Ghazoui',
          'given': 'Zara'
        },
        {
          'family': 'Ahsen',
          'given': 'Mehmet Eren'
        },
        {
          'family': 'Vogel',
          'given': 'Robert'
        },
        {
          'family': 'Neto',
          'given': 'Elias Chaibub'
        },
        {
          'family': 'Norman',
          'given': 'Thea'
        },
        {
          'family': 'Tang',
          'given': 'Eric K Y'
        },
        {
          'family': 'Garnett',
          'given': 'Mathew J'
        },
        {
          'family': 'Veroli',
          'given': 'Giovanni Y Di'
        },
        {
          'family': 'Fawell',
          'given': 'Stephen'
        },
        {
          'family': 'Stolovitzky',
          'given': 'Gustavo'
        },
        {
          'family': 'Guinney',
          'given': 'Justin'
        },
        {
          'family': 'Dry',
          'given': 'Jonathan R'
        },
        {
          'family': 'Saez-Rodriguez',
          'given': 'Julio'
        }
      ],
      'container-title-short': 'Nat Commun',
      'container-title': 'Nature communications',
      'publisher': 'Nature Publishing Group UK',
      'ISSN': '2041-1723',
      'issued': {
        'date-parts': [
          [
            2019,
            6,
            17
          ]
        ]
      },
      'page': '2674',
      'volume': '10',
      'issue': '1',
      'PMID': '31209238',
      'PMCID': 'PMC6572829',
      'DOI': '10.1038/s41467-019-09799-2',
      'type': 'article-journal'
    }]
  },
  {
    name: 'pmc',
    input: 'PMC6572829',
    output: [{
      'source': 'PubMed',
      'accessed': {
        'date-parts': [
          [
            2019,
            8,
            16
          ]
        ]
      },
      'id': 'pmid:31209238',
      'title': 'Community assessment to advance computational prediction of cancer drug combinations in a pharmacogenomic screen',
      'author': [
        {
          'family': 'Menden',
          'given': 'Michael P'
        },
        {
          'family': 'Wang',
          'given': 'Dennis'
        },
        {
          'family': 'Mason',
          'given': 'Mike J'
        },
        {
          'family': 'Szalai',
          'given': 'Bence'
        },
        {
          'family': 'Bulusu',
          'given': 'Krishna C'
        },
        {
          'family': 'Guan',
          'given': 'Yuanfang'
        },
        {
          'family': 'Yu',
          'given': 'Thomas'
        },
        {
          'family': 'Kang',
          'given': 'Jaewoo'
        },
        {
          'family': 'Jeon',
          'given': 'Minji'
        },
        {
          'family': 'Wolfinger',
          'given': 'Russ'
        },
        {
          'family': 'Nguyen',
          'given': 'Tin'
        },
        {
          'family': 'Zaslavskiy',
          'given': 'Mikhail'
        },
        {
          'family': 'AstraZeneca-Sanger Drug Combination DREAM Consortium'
        },
        {
          'family': 'Jang',
          'given': 'In Sock'
        },
        {
          'family': 'Ghazoui',
          'given': 'Zara'
        },
        {
          'family': 'Ahsen',
          'given': 'Mehmet Eren'
        },
        {
          'family': 'Vogel',
          'given': 'Robert'
        },
        {
          'family': 'Neto',
          'given': 'Elias Chaibub'
        },
        {
          'family': 'Norman',
          'given': 'Thea'
        },
        {
          'family': 'Tang',
          'given': 'Eric K Y'
        },
        {
          'family': 'Garnett',
          'given': 'Mathew J'
        },
        {
          'family': 'Veroli',
          'given': 'Giovanni Y Di'
        },
        {
          'family': 'Fawell',
          'given': 'Stephen'
        },
        {
          'family': 'Stolovitzky',
          'given': 'Gustavo'
        },
        {
          'family': 'Guinney',
          'given': 'Justin'
        },
        {
          'family': 'Dry',
          'given': 'Jonathan R'
        },
        {
          'family': 'Saez-Rodriguez',
          'given': 'Julio'
        }
      ],
      'container-title-short': 'Nat Commun',
      'container-title': 'Nature communications',
      'publisher': 'Nature Publishing Group UK',
      'ISSN': '2041-1723',
      'issued': {
        'date-parts': [
          [
            2019,
            6,
            17
          ]
        ]
      },
      'page': '2674',
      'volume': '10',
      'issue': '1',
      'PMID': '31209238',
      'PMCID': 'PMC6572829',
      'DOI': '10.1038/s41467-019-09799-2',
      'type': 'article-journal'
    }]
  }
]

describe('pubmed', function () {
  describe('api', function () {
    for (let { name, input, output } of apiTests) {
      it(name, async function () {
        assert.deepStrictEqual(await plugins.input.chainAsync(input, { generateGraph: false }), output)
      })
    }
  })
})
