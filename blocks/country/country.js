export default function decorate(block) {

    let res;
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      body: JSON.stringify({
        query: `query {
          country(code: $ID)
          name
        }`,
        variables: {
          ID: 'BR'
        }
      }),
      headers: {
          'content-type': 'application/json'
      }
    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data);
        res = data.data.country.name;
    });
    
    const productDiv = block.querySelector(':scope > div > div');
    productDiv.innerText = res;

}

