function createPerson(name, age) {
    return { name: name, age: age };
}
var person = createPerson("Alice", 30);
console.log("Name: ".concat(person.name, ", Age: ").concat(person.age));
