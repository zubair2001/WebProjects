const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull',()=>{
    console.log("paani bhar gaya hai....")
    setTimeout(()=>{
        console.log("jaldi motor band kardo...paani bhar gaya hai...!!")
    },5000);
});

console.log("The script is running");
myEmitter.emit('Waterfull');
setTimeout(()=>{
    console.log("Event has been fired successfully!!")
},6000);
