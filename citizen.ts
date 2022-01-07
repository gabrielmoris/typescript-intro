interface Person {
    name:string,
    age:number
}

interface Employee extends Person {
    company?: string,
    location:string
}

const gabriel: Employee={
    name: "Gabriel",
    age: 32,
    location:"Berlin"
}