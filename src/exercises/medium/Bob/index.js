/**
 * Bob
 *
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * Bob answers 'Sure.' if you ask him a question.
 *
 * He answers 'Whoa, chill out!' if you yell at him.
 *
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 *
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 *
 * He answers 'Whatever.' to anything else.
 */

// filter unwanted characters (test() checks 'text' included  chars)
const hey = bobsMessage => {
  const filter = text => /^[A-Z \%\^\*\@\#\$\(\*\^0-1]*$/.test(text);
  // removes whitespace from both sides with trim()
  bobsMessage = bobsMessage.trim();

  let lastCharacter = bobsMessage[bobsMessage.length - 1];
  let isShouting = filter(bobsMessage.slice(0, -1));
  let isYelling = filter(bobsMessage.slice(-2, -1));

  if (bobsMessage == "") {
    // If you address him without actually saying anything.
    return "Fine. Be that way!";
  } else if (isShouting && lastCharacter == "?") {
    // If you yell a question at him.
    return "Calm down, I know what I'm doing!";
  } else if (isShouting || (isYelling && lastCharacter == "!")) {
    // If you yell at him.
    return "Whoa, chill out!";
  } else if (lastCharacter == "?") {
    // If you ask him a question.
    return "Sure.";
  } else return "Whatever.";
};

module.exports = hey;
