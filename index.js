let fs= require('fs');

let http=require('http');

let server = http.createServer(function (req,res){
    if(req.url=='/'){
        let myfile = fs.readFileSync('home.html','utf8');
        res.end(myfile);
        
    }else if(req.url=='/blog.html'){
        let myfile = fs.readFileSync('blog.html','utf8');
        res.end(myfile);
    } else if(req.url=='/servises.html'){
        let myfile = fs.readFileSync('servises.html','utf8');
        res.end(myfile);
    }else if(req.url=='/about.html'){
        let myfile= fs.readFileSync('about.html','utf8');
        res.end(myfile);
    }else if(req.url=='/contact.html'){
        let myfile = fs.readFileSync('contact.html','utf8');
        res.end(myfile);
    }
})


server.listen(5050);
console.log('server is running');