const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html':req.url
    )
   
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch(extname) {
        case '.css':
            contentType = 'text/css';
            break
        case '.js':
            contentType = 'text/javascript';
            break
        case '.jpg':
            contentType = 'image/jpeg';
        break      
    }
    

    fs.readFile(filePath, 'utf-8', (err, data) => {        
        if(req.url==='/'){
            fs.readFile(__dirname + '/public/index.html','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"});                                              
                res.end(data); 
            });
                     
        }else if(req.url==='/about'){
            fs.readFile(__dirname + '/public/about.html','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"});               
                res.end(data);  
            });
        }else if(req.url==='/style.css'){
            fs.readFile(__dirname + '/public/style.css','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"text/css"});               
                res.end(data);  
            });
        }else if(req.url==='/img/logo.jpg'){
            fs.readFile(__dirname + '/public/img/logo.jpg','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"image/jpg"});               
                res.end(data);  
            });
        }else if(req.url==='/img/bg1.jpg'){
            fs.readFile(__dirname + '/public/img/bg1.jpg','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"image/jpg"});               
                res.end(data);  
            });
        }else if(req.url==='/blog'){
            fs.readFile(__dirname + '/public/blog.html','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"text/html"});                
                res.end(data); 
            });
        }else{
            fs.readFile(__dirname + '/public/404.html','utf-8',(err, data)=>{
                res.writeHead(404,{"Content-Type":"text/html"});               
                res.end(data); 
            });  
        }
        

    });    
});



const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('listening on port 3000');
})