import http from 'http';
import fs from 'fs/promises'
import path from 'path';
import url from 'url';
const PORT = process.env.PORT;

//normally we would be using some framework for creating a server and req,res stuff....buttt...firstly we should check whats happening under the hood...so for now we will create and listen from the server manually by using nodejs modules and methods
const __filename = url.fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);
//console.log(__filename,__dirname);
const server = http.createServer( async (req,res)=>{
    //res.write('Hello World!');y
    // res.setHeader('Content-Type','text/html')
    // res.statusCode =200;
    
     //NOW WE WILL MAKE A SIMPLE ROUTER 

     try{
        let filePath;
        if(req.method==='GET'){
            
            if(req.url==='/'){
             filePath=path.join(__dirname,'public','index.html')
            
     }else if(req.url==='/about'){
               filePath=path.join(__dirname,'public','about.html')
               
     }else{
        filePath=path.join(__dirname,'public','error.html')
     }
     const data= await fs.readFile(filePath);
     res.setHeader('Content-Type','text/html')
     res.write(data);
     res.end();
    }else{
        throw new Error('method not allowed')
    }
    
 
}catch(error){
    if(error.message==='method not allowed'){
         res.writeHead(500, {'Content-Type': 'text/plain'})
         res.end('server side error')
     }
     else{
         res.writeHead(500, {'Content-Type': 'text/plain'})
         res.end('some issue occured')
     }
    }
        
     })
    //while using some framework like express...ending the response is not my responsibilty . express does it automatically..but for now we have to do this manaully


// app.post('/users' , ()=>{
//     //xyz 
// }) //express stuff
server.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})

