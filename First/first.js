const fs=require('fs');
fs.writeFileSync('hi.txt','heyyy');


const name ="a";
let age=21;
let hasPet=true;

function details(name,age,pet){
    return 'My name is '+ name + ' i am '+ age + ' years old has pet = '+ pet;
}
const add= (a,b)=>a+b;
console.log(details(name,age,hasPet));
//alert(name);\
console.log(add(5,1));
// objects
const person={
    name:'Ap',
    age:21,
    greet(){
        console.log('My self '+this.name);
    }
};
person.greet();
console.log(person);

const hob=['singing','playing','tv'];
const arr=[1,2,3,4,5,6];
// for(let x of arr){
//     console.log(x);
// }
// for(let x of hob){
//     console.log(x);
// }
// console.log(hob.map(hob =>{
//     return 'hobbie: ' +hob;
// }));

// const copy=[...hob];
// console.log(copy);

// const display=()=>{
//     console.log(person.name);
// }
// display();
const nameIt=({name,age})=>{
    console.log(name + " "+ age);
}
nameIt(person);

const delay=setTimeout(()=>{
    console.log("delayed message")
},2000);
delay;