console.log(fullName("John", "Doe")); //Expected result: 'John Doe'

function fullName(x, y) {
   let person = x + " " .concat(y) 
   return person
}