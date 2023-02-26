/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const markov = require("./markov");

function makeNewText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function fileText(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Can't read ${path}: ${err}`);
            process.exit(1);
        }
        makeNewText(data);
    });
}

async function urlText(url) {
    try {
        let res = await axios.get(url);
        makeNewText(res.data);
    }
    catch (err) {
        console.error(`Can't read ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[3];

if (process.argv[2] === 'file') {
    fileText(path);
}
else {
    urlText(path);
}