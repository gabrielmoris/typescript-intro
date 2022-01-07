console.log("Hello, World!");

const images: string[] = ["hola", "saludos"];

function sum(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

let buttonText: "Make Frienship" | "Cancel Friendship" | "Accept Friendhip";

buttonText = "Cancel Friendship";

const city: { name: string; country: string } = {
    name: "Berlin",
    country: "Germany",
};

function waitThenRun(callback: (somerhing: string) => undefined) {}

let something: any;

let numberOrString: number | string = 3;

const city2: { name: string; country: string,population:number,location:number[] } = {
    name: "Berlin",
    country: "Germany",
    population: 23,
    location:[2,3]
};
type BigCity= { name: string; country: string,population:number,location:number[] }

const city3: BigCity ={
    name:"Berlin",
    country:"Germany",
    population: 29889898,
    location:[23,34,45,23]
}

interface Animal {
    name: string,
    canFly: boolean,
    age:number
}

const dog: Animal={
    name: "Laica",
    canFly: true,
    age:12
}