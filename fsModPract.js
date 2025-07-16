import fs from 'fs/promises';


// // fs.writeFile('./test.txt' , 'content from writeFile() function' , ()=>{  
// // })


// const readFile = async ()=>{
//     try{
//     const data = await fs.readFile('./test.txt' , 'utf-8')
//     console.log(data);
//        }catch(error){
//         console.log(error)
//        }
// }
// const writeFile= async()=>{
//     try{   
//        await fs.writeFile('./test.txt' , 'from write' )   
//     }catch(error)
//         {console.log(error)};
// }

// const appendFile= async ()=>{
//     try{
//        await fs.appendFile('./.txt' , '\nfrom append file')
          
//     }catch(error){
//        console.log(error);
//     }
    
// }
// writeFile();
// appendFile();
// readFile();


async function example(){
            const filePath = './def.txt';

    try{
        const data =  await fs.readFile(filePath , 'utf-8');
        console.log(data);
        const newContent = 'something new';
        await fs.appendFile(filePath, newContent /*, { flag: 'a+' }this flag places the postion of the stream at the end*/ );
        console.log('just wrote some content');
        const data2 = await fs.readFile(filePath , 'utf-8');
        console.log(data2);
    }catch(err){
        throw new Error();
    }
}

example();