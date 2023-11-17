export default function decorate(block) {
fetch('https://graph.adobe.io/api/d4132ec8-ae21-4c66-8585-561cb5bea682/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `{
        contentSearch(input: "G-SHOCK") {
          meta {
            uuid
            errors
          }
          response {
            businessId
            queryId
            resultsCount
            results {
              data {
                id
              }
              products {
                __typename
                id
                name
                sku
                images {
                  url
                }
                ... on SimpleProductView {
                  price {
                    final {
                      amount {
                        value
                        currency
                      }
                    }
                  }
                }
              }
            }
            allResultsForVertical {
              resultsCount
              results {
                data {
                  id
                }
                products {
                  __typename
                  id
                  name
                  sku
                  images {
                    url
                  }
                  ... on SimpleProductView {
                    price {
                      final {
                        amount {
                          value
                          currency
                        }
                      }
                    }
                  }
                }
              }
            }
            appliedQueryFilters
            facets
            source
            searchIntents
            locationBias {
              latitude
              longitude
              locationDisplayName
              accuracy
            }
          }
        }
      }`,
    }),
    headers: {
        'x-api-key': 'f55a7e88767c4fada88fdec4c85831f6'
    }
  })
  .then(res => res.json()) 
  .then(data => {
    console.log(data);
  });

}