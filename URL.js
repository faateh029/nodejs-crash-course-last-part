import url from 'url';
const urlStr = 'https://www.google.com/search?q=hello+world';

// url obj
const urlObj = new URL(urlStr);
console.log(urlObj);

console.log(urlObj.pathname);

console.log(url.format(urlObj));


//import.meta == meta data about the current module... 

console.log(import.meta.url);

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params=new URLSearchParams(urlObj.search);

console.log(params.get('q'));
params.append('limit' , '5');
console.log(params);