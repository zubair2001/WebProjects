const fs = require('fs');

// fs.readFile('file1.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })

// const a =fs.readFileSync('file.txt');
// console.log(a.toString());

fs.writeFile('file2.txt','This is a text',()=>{
    console.log('File created');
})


console.log("finished reading file");