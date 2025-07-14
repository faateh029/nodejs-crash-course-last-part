import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/xyz.txt';


// basename() 

console.log(path.basename(filePath));

//dirname()

console.log(path.dirname(filePath));

//extname()

console.log(path.extname(filePath));

//parsse()

console.log(path.parse(filePath));



const __fileName= url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

//console.log(__dirname,__fileName);

//join()
 

const filePath2 = path.join(__dirname , 'dir1' , 'dir2' , 'xyz.txt');
console.log(filePath2)

//resolve()

