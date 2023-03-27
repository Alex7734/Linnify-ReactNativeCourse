// Exercise 1
function sayHello(firstName: string, lastName: string): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

sayHello("Alex", "Mihoc");

// Exercise 2

interface Person {
  name: string;
  age: number;
}

function sumAges(person1: Person, person2: Person): number {
  return person1.age + person2.age;
}

console.log(sumAges({name:'Alex', age: 19}, {name:'Costin', age:14}))

// Exercise 3

function sumAgesArr(persons: Person[]): number {
  return persons.reduce((totalAge, person) => totalAge + person.age, 0);
}

const persons: Person[] = [
  { name: "John", age: 20 },
  { name: "Jane", age: 24 },
  { name: "Jo", age: 40 },
];

const totalAge = sumAgesArr(persons);
console.log(totalAge); 

// Excercise 4

interface PersonToChange {
  firstName: string;
  lastName: string;
  age: number;
}

interface ModifiedPerson {
  name: string;
  age: string;
}

function formatPersons(persons: PersonToChange[]): ModifiedPerson[] {
  return persons.map(person => {
    const name = `${person.firstName} ${person.lastName}`;
    const age = `${person.age} y/o`;
    return { name, age };
  });
}

const personsToChange: PersonToChange[] = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Jane", lastName: "Doe", age: 24 },
  { firstName: "Jo", lastName: "Doe", age: 40 },
];


const formattedPersons = formatPersons(personsToChange);
console.log(formattedPersons);

// Excercise 5

function sortByAge(persons: Person[]): Person[] {
  return persons.sort((a, b) => a.age - b.age);
}

const sortedPersons = sortByAge(persons);
console.log(sortedPersons);

// Exercise 6

function removeUnderagedPersons(persons: Person[], ageThreshold: number): Person[] {
  return persons.filter(person => person.age >= ageThreshold);
}

const underagedPersons = removeUnderagedPersons(persons, 30);
console.log(underagedPersons);


