const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
}

//? U S A N D O     H A S O W N P R O P E R T Y -------------------


function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on('data', (data) => {
      // echo Henry Bash
      const args = data.toString().trim().split(" ");
      // [echo, henry, bash]
      const cmd = args.shift(" ");
      // [echo]
      
      if( commands.hasOwnProperty(cmd)) {
         commands[cmd](print, args.join(" "));
      } else {
         print(`command not found: ${cmd}`)
      }
      
   })
}

//? U S A N D O     T E R N A R I O S -----------------------------

/*

function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on('data', (data) => {
      // Si pasamos por ejemplo: echo Hola Henry
      const args = data.toString().trim().split(" ");
      // seria [echo, Hola, Henry]
      const cmd = args.shift(" ");
      // y [echo] 

      commands[cmd] ? commands[cmd](print, args.join(" ")) 
      : print(`command not found: ${cmd}`)   
   })
}
*/

//? ------------------------------------------------------------------------

bash();
module.exports = {
   print,
   bash,
};
