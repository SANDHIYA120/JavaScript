function dummy(){
    setTimeout(() => {
        console.log("hello world")
    }, 2000);
}

dummy()

//

function brush(){
    setTimeout(() => {
        console.log("time taken for brush is 2500")
    }, 2500);
}

function bath(){
    setTimeout(() => {
        console.log("time taken to bath is 2300")
    }, 2300);
}

function ready(){
    setTimeout(() => {
        console.log("time taken to ready is 2800")
    }, 2800);
}

function eat(){
    setTimeout(() => {
        console.log("time taken to eat is 3500")
    }, 4000);
}

function relax(){
    setTimeout(() => {
        console.log("time taken to relax is 5000")
    }, 5000);
}
brush()
bath()
ready()
eat()
relax()

