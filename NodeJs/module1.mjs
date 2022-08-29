// function count (n){
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }

// module.exports=count; //commonjs module system

export function countA (n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}

export function countS (n){
    for(let i=n;i>=1;i--){
        console.log(i);
    }
}