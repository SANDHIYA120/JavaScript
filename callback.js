//callback

function orderfood(dummy){
    setTimeout(() => {
        console.log("i am going to eat")
        dummy()
    }, 4000);
}

function eatfood(){
    setTimeout(() => {
        console.log("food delivered,going to eat")
    }, 2000);
}
orderfood(eatfood)


//call hell

function brush(a){
    setTimeout(() => {
        console.log("time taken for brush is 2500")
        a()
    }, 2500);
}

function bath(b){
    setTimeout(() => {
        console.log("time taken to bath is 2300")
        b()
    }, 2300);
}

function ready(c){
    setTimeout(() => {
        console.log("time taken to ready is 2800")
        c()
    }, 2800);
}

function eat(d){
    setTimeout(() => {
        console.log("time taken to eat is 3500")
        d()

    }, 4000);
}

function relax(){
    setTimeout(() => {
        console.log("time taken to relax is 5000")
    }, 5000);
}

brush(()=>{
    bath(()=>{
        ready(()=>{
            eat(relax)
        })
    })
})


//////

function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let room=true;
            if (room){
                resolve("room is cleaned")
            }
            else{
                reject("room is not cleaned")
            }
        }, 4000);
    })
}

function vesselwash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let wash=true;
            if(wash){
                resolve("vessel washed")
            }
            else{
                reject("vessel not washed")
            }
        }, 2000);
    })
}

function cooking(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let cook=false;
            if(cook){
                resolve("food is ready")
            }
            else{
                reject("food is not cooked")
            }
        }, 5000);
    })
}

roomclean().then((el)=>{console.log(el);return vesselwash()})
            .then((el2)=>{console.log(el2);return cooking()})
            .then((el3)=>{console.log(el3);return console.log("all works are done")})
            .catch((err)=>{console.log("ERROR :",err)})