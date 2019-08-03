function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
  }
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(tidyUpString).map(capitalise); // You are allowed to edit this line

console.log(mentorsTidy); // Expected result: ["Daniel", "Irina", "Gordon", "Ashleigh"]
