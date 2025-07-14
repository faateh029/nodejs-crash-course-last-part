import crypto from 'crypto';
// const hash =  crypto.createHash('sha256');
// hash.update('password133');
// //console.log(hash.digest('hex'));

// //we can turn readeable data into encrypted cryptographic data by using this module by using keys , IV's;

// crypto.randomBytes(16 , (err, buf)=>{
//     if(err)throw err;
//     console.log(buf.toString('hex'));
// })
//study it again


const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher= crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update('My name is Faateh Ameen Butt' ,'utf-8', 'hex' )
encrypted+=cipher.final('hex');
console.log(encrypted);


const decipher= crypto.createDecipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted ,'hex', 'utf-8' )
decrypted+=decipher.final('utf-8');
console.log(decrypted);