function greet(person:string|{name:string}){
    if(typeof person === "object"){
        return`Hello${person.name}`
    }else if(typeof person ==="string"){
        return `Hello${person}`
    }else{
        return `Hello anonymous`
    }
}
