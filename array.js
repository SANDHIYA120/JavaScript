// array methods

let fruit=["apple","orange","banana","kiwi"]
fruit.push("grapes")                                    //adds a new element
console.log(fruit)
fruit.pop()                                             //removes last elelemt from the array
console.log(fruit)
fruit.unshift()                                         //adds a new element to beginning of the array
console.log("watermelon")
fruit.shift()                                           //removes the first element from the array
console.log(fruit)

console.log(fruit.slice(0,2))                           //
console.log(fruit.slice(1,2))
console.log(fruit.slice(-3,-2))
console.log(fruit.splice(0,1,"strawberry"))
console.log(fruit)
console.log(fruit.splice(0,1))
console.log(fruit)
console.log(fruit.splice(0,0,"strawberry","blueberry"))
console.log(fruit)

let num=[9,4,5,6,2,3]

console.log(num.indexOf(1))
console.log(num.lastIndexOf(1))
console.log(fruit.concat(num))

fruit.sort()
num.sort()
console.log(fruit)
console.log(num)
console.log(fruit.reverse())
console.log(num.reverse())

//task

let arr=[1,2,3,4];
arr.push(5,6);
arr.push(8,9);
console.log(arr);
arr.pop();
console.log(arr)
arr.unshift(10);
console.log(arr);

 // MRF METHODS

   // let mrf=[1,2,3,4,5,6,7,8,9]

   // let add=mrf.map((val)=>val+5)   
   console.log(add)
    
    //filter                = means value assign,== means 

    let even=mrf.filter((val)=>val%2==0)
    console.log(even)


    //reduce

    let sum=mrf.reduce((acc,val)=>acc+val,10)
    console.log(sum)

    //task
    let mrf =["sandhiya","sathyanathan","soundharya"]
    let add =mrf.map((val)=>val+"    "+ "saminathan")
    console.log(add)


    //task
    let organization = [
    "TechCorp International",
    1999,
    true,
    null,
    ["India", "USA", "Bangalore", "New York", ["Koramangala", "Brooklyn"]],
    {
        department: "Engineering",
        teams: [
            {
                name: "QA",
                members: [
                    { id: 1, name: "Muthu Kannan", skills: ["Playwright", "Selenium"], available: true },
                    { id: 2, name: "Pradeep", skills: ["Java", "Spring Boot", ["Docker", "Kubernetes"]], available: false }
                ]
            },
            {
                name: "Development",
                members: [
                    { id: 3, name: "Sandhiya", skills: ["React", "Node.js"], available: true },
                    { id: 4, name: "Vaishnavi", skills: ["Python", "Django"], cloud: ["AWS", "Azure", "GCP"], available: true }
                ]
            }
        ]
    },
    { project: "AutoShop360", status: "Ongoing", tasks: ["UI Testing", "API Automation"] },
    { project: "QuickCart", status: "Completed", tasks: [{ sprint: 1, bugs: 12 }, { sprint: 2, bugs: 5 }] }
];

 //task

     //Task 1
let names=["abi","hari","sam","shri","moni","john"];
let split = names.filter((arr)=>arr.length>3)
console.log(split) 

let upcase = names.map((arr)=>arr.toUpperCase())
console.log(upcase)