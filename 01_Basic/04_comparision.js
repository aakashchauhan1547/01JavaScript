// primitive datatype

//7 types : String , number, boolean , null , undefined, BigInt symbol

const id = Symbol('123');
const nextId = Symbol('123');
 const bigNumber = 12548963n
console.log( typeof bigNumber);
console.log(id===nextId);

// Reference(Non primitive datatype)

// Array , Object , Functions


const loads = ["Ram" , "Mahadev"  ]
let myObj = {
    name : "bholenath",
    age : null,
}


const myFunction = function(){
    console.log("hello");
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* stack and heap memory*/

// stack (primitive)  ., Heap (non- primitive)