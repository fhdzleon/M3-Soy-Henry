const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date());
}

function echo(print, args) {

/*---------------------------------------
    const printArgs = args.split(" ")
    printArgs.shift();                     ESTE PASO YA LO HACEMOS DIRECTO EN bash(), 
    const string = printArgs.join(" ")
----------------------------------------*/

    print(args);
}

function ls(print) {
    fs.readdir(".", (error, files)=> {
        if (error) {
            throw error;
        } else {
            print(files.join(" "))
        }
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if (error) {
            throw new Error (error);
        } else {
            print(data)
        }
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=> {
        if(error) {
            throw new Error (error);
        } else {
            const lines = data.split("\n").slice(0, 1);
            print(lines.join("\n"));
        }
    })
} 

function tail(print, args) {
    fs.readFile(args, 'utf-8',(error, data)=>{
        if(error) {
            throw new Error (error);
        } else {
            const lines = data.split("\n");
            const lastLine = lines[lines.length-1].trim();
            print(lastLine)
        }
    } )
}

function curl(print, args) {

    utils.request(`https://${args}` , (error, response) => {
        if (error) throw Error (error);
        
        print(response)
    })
/*
    utils.request(args, (error, response) => {
        if(error) {
            throw error;
        } else {
            print(response);
        }
    })
    */
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
