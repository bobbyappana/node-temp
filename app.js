/*for OS */
const os = require('os')
const http = require('http')
const data = require('./tutorial/exp1')
 
console.log("data",data);
const user = os.userInfo()

console.log(user);

/* for http */

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("welcome to about ")
    }
    if (req.url === "/") {
        res.end("welcome to Hmoe ")
    }

    res.end(`<h1>Opps! no page</h1>>`)

})
server.listen(5000) 