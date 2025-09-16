//operators
//arithmetic

function arithmetic(){
    let a=10
    let b=5

    //console.log(a+b)
    //console.log(a-b)
    //console.log(a*b)
    //console.log(a/b)
    //console.log(a%b)
    //console.log(a**b)
    a++
    console.log(a)
    b--
    console.log(b)

}
arithmetic()


//assignment

function assignment(){
    let a=10
    let b=20

    a+=b //a=a+b
    console.log(a)

    a-=b  //a=a-b
    console.log(a)

}
assignment()

//equality

function equality(){

    let a=10
    let b=20
    let c="10"

    console.log(a==b)
    console.log(a==c)

    console.log(a===b)
    console.log(a===c)

}
equality()

// comparison

function comparison(){
    let a=10
    let b=20
    let c="10"

    console.log(a<b)
    console.log(a>b)
    console.log(a<=b)
    console.log(a>=c)
    console.log(a!=b)
    console.log(a!=c)
    console.log(a!==c)
    

}
comparison()

//logical 

function logical(){

    let a=10
    let b=20
    let c="10"

    console.log(a==c && a>c)
    console.log(a==c || a>b)

}
logical()

//ternary

let age=7

let output=(age>18) ? "adult": "child"

console.log(output)



//task

let mark=35
let input=(mark>=35)?"pass":"fail"
console.log(input)
 