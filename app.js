// GLOBALS - NO WINDOW !!!!
//__dirname - path to directory
//__filename - file name
// require - function to use modules(CommonJS)
//module - info about current module(file) module is nothing but encapsulated code(only share minimum)
//process - info about env where the program is being executed


/*const names=require('./4-names')
const sayHi=require('./5-utils')
const data= require('./6-alternative-flavour')
require('./7-mind-grenade')
console.log(names)
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
const os = require('os')
//info about the current user
const user= os.userInfo()
console.log(user)
//method returns uptime of the user
console.log(`The system uptime is ${os.uptime()} seconds`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)
const path=require('path')
console.log(path.sep)
const filePath= path.join('/content','subfolder','test.txt')
console.log(filePath)
const base= path.basename(filePath)
console.log(base)
const absolute= path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
const {readFileSync, writeFileSync}=require('fs')
const first= readFileSync('./content/first.txt','utf-8')
const second= readFileSync('./content/second.txt','utf-8')
console.log(first, second)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)
// if we want to append
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag:'a'})*/

const http= require('http')
const server= http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end('welcome to our home page')
    }
    if(req.url==='/about')
    {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we cant seem to find the page you are looking for</p>
        <a href="/">back home</a>`)
})
server.listen(5001)
