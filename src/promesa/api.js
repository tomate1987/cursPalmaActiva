//llamar o intaciar la dependencia con reqire
// sin jquery

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://rickandmortyapi.com/api/character/";

const conectar = (api_url) => {

    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', api_url, true);
      xhttp.onreadystatechange = (event) => {

        if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          const xhttResponse = JSON.parse(xhttp.responseText);
          resolve(xhttResponse);
        }
        else {
          const error = new Error ('Error', url)
          reject(error);
         }
        }
      };
  
      // Make the request
      xhttp.send();
    });
  };
  
conectar(url)
    .then((response) =>  {

      const {count} = response.info;
      const {id} = response.results[0];
      const url_2 = url + id ;
      console.log(count);

      return conectar (url_2);

    })

    .then((response) =>  {

      const {name} = response;
      const url_3 = response.origin.url;
      console.log(name);

      return conectar (url_3);

    })

    .then((response) =>  {

      const {dimension} = response;
      console.log(dimension);


    })
    .catch(console.error);
