const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url!='/is-91-026'){
        res.write('<h2>Андрiй</h2>');
        res.write('<h2>Хмелiнiн</h2>');
        res.write('<h2>2й курс</h2>');
    }
})
server.listen(3001, ()=>{console.log('Server has been started...')})