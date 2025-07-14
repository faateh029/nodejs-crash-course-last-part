// console.log(process);
console.log(process.argv);
console.log(process.argv[3]);


console.log(process.pid);

console.log(process.cwd());


console.log(process.title);


console.log(process.memoryUsage());

process.on('exit' , (code)=>{
     console.log(`about to exit with ${code}`);
})
console.log(process.uptime());


 console.log(process.exit(0));
 console.log('hello after exit');