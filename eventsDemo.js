import {EventEmitter} from 'events';

// const myEvent = new EventEmitter();
// function sayHello(){
//     console.log('hello')
// }

// function sayBye(){
//     console.log('bye')
// }

// myEvent.on('greet' , sayHello);

// myEvent.on('bye' , sayBye);

// myEvent.emit('greet', );
// myEvent.emit('bye');
// its like registering a custom event for your application and u can use it for real time experiences 

//we can also pass values


// const myEvent = new EventEmitter();
// function sayHello(name){
//     console.log('hello'+ name)
// }

// function sayBye(name){
//     console.log('bye'+name)
// }

// myEvent.on('greet' , sayHello);

// myEvent.on('bye' , sayBye);

// myEvent.emit('greet','jhon' );
// myEvent.emit('bye' , 'jhon');


//we can also do error handling with it 

const myEvent = new EventEmitter();
function sayHello(name){
    console.log('hello'+ name)
}

function sayBye(name){
    console.log('bye'+name)
}

myEvent.on('greet' , sayHello);

myEvent.on('bye' , sayBye);

myEvent.emit('greet','jhon' );
myEvent.emit('bye' , 'jhon');


myEvent.on('error', (err)=>{
    console.log(err) ; 
})

myEvent.emit('error' , new Error('something went wrong'));



const event = new EventEmitter(); 
console.log('before emiting event');

event.on('test' , ()=>{console.log('test1')})

event.on('test' , ()=>{console.log('test2')})

event.on('test' , ()=>{console.log('test3')})
event.once('mewo' , ()=>{console.log('mewo')});
event.emit('mewo');

event.emit('mewo')
event.emit('test');

console.log('after registering events');
const danceFunc = ()=>{console.log('dance')}
event.on('dance' , danceFunc);
event.emit('test');
event.off('dance' , danceFunc);
event.emit('dance');
console.log('after emitting events');

// console.log(event.eventNames());

// console.log(event.getMaxListeners());

// event.setMaxListeners(12);

//console.log(event.listeners('dance'));

