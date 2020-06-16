
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const conectar = (url) => {

  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = (event) => {

      if (req.readyState === 4) {
          (req.status === 200) 
              ? resolve(JSON.parse(req.responseText))
              : reject(new Error ("Error", url));  
    }
  };
    req.send();
  });
};


module.exports = conectar;

