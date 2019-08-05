const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = () => {
  let titles = [];
  for (let i in books) {
    let book = books[i];
    titles.push(book.title);
  }
  return titles;
};

console.log(getTheTitles(books)); // Expected result: ['4 hour work week', 'Tools of Titans']
