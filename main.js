class FullName {

    constructor (props) {
        this.firstName = props.firstName
        this.lastName = props.lastName
    }
    set nickName (newNickName) {
        if(typeof(newNickName) === "string" &&  !nick.includes("fu"))
        this._nickName = newNickName
    }

    get nickName(){
        return this._nickName
    }

    get makeFullName () {
        return `${this.firstName} ${this.lastName}`
    }
}



const bryanProperties = {
    firstName: "Bryan",
    lastName: "Nilsen",
}

const bryanNilsen2 = new FullName({
    firstName: "Bryan",
    lastName: "Nilsen",
})


const bryanNilsen = new FullName(bryanProperties)

bryanNilsen.nickname = "laserman"



console.log("bryanNilsen New Class: ", bryanNilsen)
console.log("bryanNilsen New Class with MakeFullName: ", bryanNilsen.makeFullName.nickName)
console.log("bryanNilsen2 New Class: ", bryanNilsen2)
console.log("bryanNilsen2 New Class with MakeFullName: ", bryanNilsen2.makeFullName)


// Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.

class ChildCare {
    constructor(props){
        this.childName = props.childName
        this.careGiver = props.careGiver
    }

    get changeDiaper(){
        return `Way to wipe ${this.childName}'s butt, ${this.careGiver}!!!`
    }

    set behavior(behaving){
        this._behavior = behaving
    }
    get behavior(){
        return `Your child ${this._behavior}`
    }
}

const childcareProperties = {
    childName: "Petey",
    careGiver: "Sally"
}

const babysittingScenario = new ChildCare(childcareProperties)
babysittingScenario.behavior = "played nicely"

console.log("Changed Diaper: ", babysittingScenario.changeDiaper)
console.log("How did your child behave? ", babysittingScenario.behavior)