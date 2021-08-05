
 console.error("module not registred");
 const name = 'John';  
 console.warn(`Don't mess with me ${name}! Don't mess with me!`); 

 os   
 const os = require('os');  

console.log("os.freemem(): \n",os.freemem()); 
 console.log("os.arch(): \n",os.arch()); 
 console.log("os.homedir(): \n",os.homedir());  
 console.log("os.hostname(): \n",os.hostname());  
 console.log("os.endianness(): \n",os.endianness());  
 console.log("os.networkInterfaces(): \n",os.networkInterfaces()); 

 time 
 setInterval(function() {  
     console.log("setInterval: Hey! 1 millisecond completed!..");   
    }, 1000);  

 var i =0;  
console.log(i);  
 setInterval(function(){  
 i++;  
 console.log(i);  
 }, 1000);  

setTimeout(function() {   
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000);  

 var recursive = function () {  
     console.log("Hey! 1000 millisecond completed!..");   
     setTimeout(recursive,1000);  
 }  
 recursive();   

 System errors
 const fs = require('fs'); 
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error', err);  
   return;  
 }  
  console.log(data);  
 }  
 fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);  
 fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  

 DNS 
const dns = require('dns');  
 dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
   console.log('addresses:', addresses);  
   console.log('family:',family);  
 });  

 socket 
const net = require('net');  
var server = net.createServer((socket) => {  
  socket.end('goodbye\n');  
 }).on('error', (err) => {  
   // handle errors here  
   throw err;  
 });  
 grab a random port.  
 server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
 });  

 crypto
 const crypto = require('crypto');  
 const secret = 'abcdefg';  
  const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to JavaTpoint')  
                  .digest('hex');  
 console.log(hash); 