//loops

for(let i=1;i<=10;i++){
    console.log(i)
}


let x=0
for(let i=0;i<=10;i++){
    x=x+i
    console.log(x)
}
console.log(x)


let str="javascript"
for(let i=0;i<str.length;i++){
    console.log(str[i])
}


let a=""

for(let i=0;i<str.length;i++){
    a=a+str[i]
    console.log(a)
}



//task

let country=["india","malaysia","singapore","china","japan"]
for(i=0;i<=country.length;i++){
    console.log(country[i])
}
console.log(country[1]);

let b=""
for(i=0;i<country.length;i++){
    b=b+country[i]+" | "
}
console.log(b)



//let name="sandhiya"

//for(i=0;i<name.length;i++){
    //console.log(name[i])
//}

let c=""
for(i=0;i<name.length;i++){
    c=c+name[i]
    //console.log(c)
}

let text="hello";
let reversed="";

for(i=text.length -1;i>=0;i--){
    reversed+=text[i]
}
console.log(reversed)




//while loop

let one=0
while(one<=10){
    one++
    //console.log(one)
}




//do while

let two=1
do{
    two++
    console.log(two)
}

while(two>=10)

    let arr=[10,20,30,40,50,60]
    console.log(arr[4])



    // for in

    let obj={
        name:"trendnologies",
        domain:"IT supporting institute",
        course:"testing"
    }

    for(let key in obj){
        console.log(key)
        console.log(obj[key])
        console.log(key,":",obj[key])
    }

    //for of

    let numbers=["one","two","three","four"]
    for(let dummy of numbers){
        console.log(dummy)
    }


    let string="sandhiya"
    for(let dummy of string){
        console.log(dummy)
    }


    // for each   looks like function

    let num=[1,2,"three","four","five"]

    num.forEach((val,ind,arr)=>{
        console.log(val,ind,arr)
    
    })
