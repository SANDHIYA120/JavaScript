class Info{
    name="shalu"     // properties
    age=10
    native="tirupur"

    details(){       //methods
        console.log("my name is "+this.name+",my age is "+this.age+",my native is "+this.native)
    }
}

let print=new Info
print.details()

class Flower{
    constructor(name,colour,fragrance,season){
        this.name=name
        this.colour=colour
        this.fragrance=fragrance
        this.season=season
    }

    fdetails(){
        console.log("my name is "+this.name+",my colour is "+this.colour)     // this one method
        console.log(`my fragrance is ${this.fragrance} and my season is ${this.season}`)   /// this one  another method
    }
}
let rose=new Flower("rose","red","mild","all season")
rose.fdetails()

let jasmine=new Flower("jasmine","white","heavy","summer")
jasmine.fdetails()


class Students {
    constructor(name, section, marks) {
        this.name = name;
        this.section = section;
        this.marks = marks; // array of marks
    }

    calculatePercentage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        let percentage = total / this.marks.length;
        return percentage.toFixed(2); // rounded to 2 decimal places
    }

    showDetails() {
        console.log(`name: ${this.name}`);
        console.log(`section: ${this.section}`);
        console.log(`percentage: ${this.calculatePercentage()}%`);
        console.log("------------------");
    }
}
let student1 = new Students("Siva", "B", [85, 90, 89]);
student1.showDetails();
let student2 = new Students("Ram", "A", [75, 80, 70]);
student2.showDetails();
let student3 = new Students("Priya", "C", [95, 98, 96]);
student3.showDetails();
let student4 = new Students("John", "B", [65, 70, 68]);
student4.showDetails();
let student5 = new Students("Meena", "A", [88, 84, 91]);
student5.showDetails();