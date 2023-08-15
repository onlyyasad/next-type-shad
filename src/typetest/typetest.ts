let userInfo1: () => void;

userInfo1 = () =>{
    console.log("My name is Asad");
}

userInfo1()

let userInfo2: (name: string) => void;

userInfo2 = (name: string) =>{
    console.log(`My name is ${name}`);
}

userInfo2("Asad")

let userInfo3: (name: string, age: number) => string;

userInfo3 = (name:string, age:number)=>{
    return `My name is ${name} and my age is ${age}`
}

console.log(userInfo3("Asad", 31));