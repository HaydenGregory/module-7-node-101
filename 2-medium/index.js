const fs = require('fs')
const dns = require('dns')
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question("Domain Name: ", function (url) {
//     readline.close();
//     dns.lookup(url, (err, address) => {
//         console.log("IP Address: ", address);
//     })
// });

readline.question('filename: ', (filename) => {
    readline.close();
    fs.readFile(filename, (error, buffer) => {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        console.log(content);
    });
});