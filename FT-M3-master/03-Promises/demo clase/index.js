const axios = require('axios');

axios.get("https://rickandmortyapi.com/api/character").then(
    (response)=> console.log(response.data),
    (reason)=> console.log(reason)
);

const statusCode = 404;

//! esto seria una idea de lo que pasa con axios -->

const miPromesa = new Promise ( (resolve, reject)=> {
    setTimeout(()=> {
        if( statusCode < 400) {
            resolve("Todo salio bien")
        } else {
            reject ("Todo salio mal")
        }
    }, 1000)
})

miPromesa
.then((value)=> console.log(value))
.catch((reason)=> console.log(reason));

