const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false
  }
];

const showStatus = () => {};

showStatus(library);
// Expected result:
//
//      Already read 'Bill Gates' by The Road Ahead.
//      Already read 'Steve Jobs' by Walter Isaacson.
//      You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
