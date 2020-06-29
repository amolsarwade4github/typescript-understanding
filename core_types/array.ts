let arrayHobby: string[];
arrayHobby = ["Cricket", "Singing"];

const person = {
    name: 'Amol',
    age: 30,
    hobbies: arrayHobby
}

console.log(person.name);
console.log(person.age);
for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}