"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  
  exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // promise version
  // Tu código acá:

  //! Usando Promise.all() NO PASA EL TEST ¿? -->

/*
  let promise1 = exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt");
  let promise2 = exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt");

  Promise.all([promise1, promise2])
    .then(values => {
      exerciseUtils.blue(values[0]);
      exerciseUtils.blue(values[1]);
    })
    .then(()=>{
      console.log("done");
    })
*/
      //! Esto es sin usar el Promise.all() SI FUNCIONA -->
    
    exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt")
      .then(stanza => {
        exerciseUtils.blue(stanza);
        return exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
      })
      .then(stanza2 => {
        exerciseUtils.blue(stanza2);
      })
    .then(()=>{
    console.log("done");
    })
    
}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  // promise version
  // Tu código acá:

  const promises = filenames.map(fileName => {
    return exerciseUtils.promisifiedReadFile(fileName)
    .then(stanza => {
      exerciseUtils.blue(stanza);
    })
    .catch(error => {
      const err = new Error(error);
      exerciseUtils.magenta(err);
    })
  })

  Promise.all(promises)
    .then(()=> {
      console.log("done");
    })

}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
