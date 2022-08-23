const concatenateStrings = (a:string, b:string) => {
    const c:number = 1 + b;

    return a + b
}


let typedVar:number = 12;
"string, number, boolean"

"null, undefined"

"any, unknown"

let someArray: number[] = [23];
let someOtherArray: Array<[number, string]> = [[123, "asdasd"]];

let someTuple: [number, string] = [12, "name"];

enum Name {
    done = "up",
    pending = "pending",
    canceled = "canceled"
}

Name.done

const someTypedObject: {a:string, b:number} = {a: "sdf", b:12}

export type User = {name: string, age:number, email:string}

const someUserTypedObject: User = {a: "sdf", b:12}

interface UserInterface {
    name: string, age:number, email:string,
}

class User2 implements UserInterface {
    public name: string
    protected age: number
    private email: string

    constructor(name:string) {
        this.name = name;
    }

    getName() {
        return this.name
    }
}

const createdUser = new User2("MyName")


let typedVar2: string = "12"

let thirdString: string = <string><unknown>typedVar

function someName(a:string, b: string):void {
    return a + b
}

function some2Name<aType, bType>(a:aType, b:bType):aType | bType  {
    if (typeof a === "string") {
        createdUser.name = "dfsdf"
        return a
    }

}

some2Name<string, number>("string", 2);