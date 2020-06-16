//traer modulo conectar

const conectar = require('../tools/conectar');

let url = "https://rickandmortyapi.com/api/character/";

conectar(url)
    .then(data =>  {
      console.log(data.info.count);
      return conectar (`${url}${data.results[0].id}`);

    })

    .then(data =>  {
      console.log(data.name);
      return conectar (`${url}${data.origin.url}`);

    })

    .then(data =>  {
      console.log(data.dimension);
    
    })
    .catch(err => console.log(err));
