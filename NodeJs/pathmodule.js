const path = require('path');

const a1=path.basename('C:\\Users\\user\Documents\Visual Studio Code\JS\NodeJS\osmodule.js');
const a2=path.dirname('C:\\Users\\user\Documents\Visual Studio Code\JS\NodeJS\osmodule.js');

console.log(a1);
console.log(a2);
const a3=path.extname(__filename);
console.log(a3);