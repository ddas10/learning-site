export default function decorate(block) {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      body: JSON.stringify({
        query: `query {
          country(code: "BR"){
            name
            currency
            emoji
          }
        }`,
        // variables: {
        //   ID: 'BR'
        // }
      }),
      headers: {
          'content-type': 'application/json'
      }
    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data);
        const productDiv = block.querySelector(':scope > div > div');
        const unorderedList = document.createElement('ul');
        const listItem1 = document.createElement('li');
        const listItem2 = document.createElement('li');
        const listItem3 = document.createElement('li');
        listItem1.textContent = data.data.country.name;
        listItem2.textContent = data.data.country.currency;
        listItem3.textContent = data.data.country.emoji;
        unorderedList.appendChild(listItem1);
        unorderedList.appendChild(listItem2);
        unorderedList.appendChild(listItem3);
        productDiv.appendChild(unorderedList);
    });
}

