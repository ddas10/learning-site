export default function decorate(block) {

    // fetch('https://countries.trevorblades.com/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     query: `query GetCountry {
    //       country(code: $ID)
    //       name
    //     }`,
    //     variables: {
    //       ID: 'BR'
    //     }
    //   }),
    //   headers: {
    //       'content-type': 'application/json'
    //   }
    // }).then(async (data) => {
    //     // Console log our return data
    //     console.log(await data.json());
    // });
    
    const productDiv = block.querySelector(':scope > div > div');
    // const p = document.createElement('p');
    productDiv.innerText = 'Testing';

}

