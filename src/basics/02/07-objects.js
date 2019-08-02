/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

function aliveWriter() {
  for (let i = 0; i < writers.length; i++) {
    let elements = writers[i];
    console.log(
      `Hi, my name is ${elements.firstName} ${elements.lastName}. 
      I am ${elements.age} years old, and work as a ${elements.occupation}.`
    );
  }
}
aliveWriter();
