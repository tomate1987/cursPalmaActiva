//promesa -- 

const PROMESA_DOS = () => {

return new Promise((resolve,reject) => {

    if(true) {

        resolve("Correcto");
    }else{
        reject("incorrecto");
    }
});

};


PROMESA_DOS()
    .then( (response) => console.log(response))
    .catch( (err) => console.eror(error));


    //promesa -- 

const PROMESA_UNO = () => {

    return new Promise((resolve,reject) => {
    
        if(true) {
    
            resolve("Correcto");
        }else{
            reject("incorrecto");
        }
    });
    
    };
    
PROMESA_UNO()
        .then( (response) => console.log(response))
        .catch( (err) => console.eror(error));
    

Promise.all([PROMESA_UNO(),PROMESA_DOS()])
    .then( (response) => {

        console.log('Resultados', response)
    })
    .catch( (err) => {
        console.eror(error)

    });
    