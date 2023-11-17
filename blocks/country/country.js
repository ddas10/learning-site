export default function decorate(block) {
    fetch('https://graph.adobe.io/api/d4132ec8-ae21-4c66-8585-561cb5bea682/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: ` {
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
          'content-type': 'application/json',
          'x-api-key': 'f55a7e88767c4fada88fdec4c85831f6'
      }
    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data);

    //     const results = data.data.contentSearch.response.results;
    //     // Loop through the results and append each product ID to the header
    //    results.forEach(result => {
    //    const productId = result.data.id;
    //    const image = result.product.images.url;
    //    const header = document.createElement('h2');
    //    const images = document.createElement('img');
    //    header.textContent = productId;
    //    images.src = image;
    //    productDiv.appendChild(header);
    //    productDiv.appendChild(images);
    //   });

        const productDiv = block.querySelector(':scope > div > div');
        const header = document.createElement('h2');
        const imageOne = document.createElement('img');
        header.textContent = data.data.contentSearch.response.results[0].data.id;
        imageOne.src = data.data.contentSearch.response.results[0].products[0].images[0].url;
        productDiv.appendChild(header);
        productDiv.appendChild(imageOne);
    });
}

