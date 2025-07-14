import http from 'http';
import fs from 'fs/promises'
const PORT= process.env.PORTTWO

const users = [
    {id:1 , name:'Faateh'},
    {id:2 , name:'ameen'},
    {id:3 , name:'butt'}
]
//logger middleware it was just to keep track of the requests 
const logger = (req,res,next)=>{
    //console.log(req.url)
    const now = new Date();
   const formatted = now.toLocaleString(); 
       req.on('end' ,()=>{
         fs.appendFile('./usersData.txt' , `{\n  Request method: ${req.method}\n  URL: ${req.url}\n  Date&Time: ${formatted}\n}\n`);
       }
    )
   next();
};


const jsonMiddleWare = (req,res,next)=>{
     res.setHeader('Content-Type' , 'application/json');
     next();
}

const getUsersHandler = (req,res)=>{
    res.write(JSON.stringify(users))
    res.end();
}

const getUsersByIdHandler=(req,res)=>{
    const id = Number(req.url.split('/')[3]);
    const user = users.find(usr=>usr.id===id)
    if(user){
            res.write(JSON.stringify(user))
    }
    res.end();
}




const notFoundHandler = (req,res)=>{
     res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end('Error: either the URL is not present or the method is not allowed');

}

const createUserHandler = (req,res)=>{
      let body='';
      req.on('data',(chunk)=>{
         body+=chunk.toString();
      })
       req.on('end' , ()=>{
       const newUser = JSON.parse(body);
       users.push(newUser);
       res.statusCode=201;
       res.write(JSON.stringify(users));
       res.end()
       })
}


const server = http.createServer((req, res)=>{
    logger(req, res, () => {
   
        jsonMiddleWare(req,res ,()=>{
            if(req.url==='/api/users' && req.method==='GET'){
                getUsersHandler(req,res);
            }else if (req.url.match(/\/api\/users\/([0-9]+)/)&& req.method==='GET'){
                getUsersByIdHandler(req,res);
            }else if (req.url==='/api/users'&&req.method==='POST'){
                createUserHandler(req,res);
            }else{
                notFoundHandler(req,res);
            }
        });
    });    
});

server.listen(PORT ,()=>{
    console.log(`server running at ${PORT}`)
})




// if(req.url==='/api/users' && req.method==='GET'){
//                 res.setHeader('Content-Type' , 'application/json')
//                 res.write(JSON.stringify(users))
//                 res.end()
//             }else if (req.url.match(/\/api\/users\/([0-9]+)/)&& req.method==='GET'){
//                 const url=req.url;
//                 const id = Number(req.url.split('/')[3]);
//                 const user = users.find(usr=>usr.id===id)
//                 if(user){
//                 res.write(JSON.stringify(user))
//             }else{
//                 res.write(JSON.stringify({ message: 'user not present' }));
//                 }
//                 res.end();
//             }
//                 else{
//                 res.setHeader('Content-Type', 'text/html');
//                 res.statusCode = 404;
//                 res.end('Error: either the URL is not present or the method is not allowed');
//             }