interface Person {
    name: string;
    age: number;
}

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person: Person = createPerson("Alice", 30);
console.log(`Name: ${person.name}, Age: ${person.age}`);
