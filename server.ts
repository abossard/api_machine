let net = require("net")

let HOST = '127.0.0.1'
let PORT = 9999

net.createServer(function (sock) {
    console.log("Connected")
    sock.on('data', function (data) {
        console.log(data)
        sock.write(data)
    })
    sock.on('close', function(data){
        console.log('CLOSED')
    })
}).listen(PORT, HOST)