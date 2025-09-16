//functions expression or anonymous function

let flower=function(name,colour){
    console.log("i am",name,"my colour is",colour)
}
flower ("rose","red")
flower("jasmine","white")

//arrow function

let movies =(ticket,snacks,parking,petrol)=>{
    console.log(ticket+snacks+parking+petrol)
}
movies(250,100,50,100);

//life

(function(){
    console.log("hello kutty")
})()

//function declaration

function info(name,age){
    console.log("my name is",name);
    console.log("my age is",age);
}

info ("sandhiya",26)
info("soundharya",20)




