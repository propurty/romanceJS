let text =
  "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/gi, "")
    .split(" ");
}

// we will use this to generate word pairs with the corpus as an argument
function generateWordpairs(corpus) {
  // We need word pairs stored as an object
  let wordpairs = {};

  let words = parseText(corpus);
  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    let nextWord = words[i + 1];
    if (wordpairs[word]) {
      wordpairs[word].push(nextWord);
    } else {
      wordpairs[word] = [nextWord];
    }
  }
  return wordpairs;
}

// writeLine will need a helper function that takes a word and
// randomly chooses a word from its Markov Chain array.
// Make a function to choose a random word from an array
// return a random word from the array

function chooseRandomWord(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// We need to make a function to write a line of poetry based on a word corpus and a minimum length
// We will choose a random word from the corpus
// We will loop through the word pairs until we reach n lebgth
// We will join the words together and return the line of poetry

function writeLine(corpus, n) {
  let words = parseText(corpus);

  let randomWord = chooseRandomWord(words);

  let wordPairs = generateWordpairs(corpus);

  let line = [randomWord];
  while (line.length < n) {
    let lastWord = line[line.length - 1];
    let nextWord = chooseRandomWord(wordPairs[lastWord]);
    line.push(nextWord);
  }
  return line.join(" ");
}

// With our writeLine function, we can now write our broader generatePoem function.
function generatePoem(corpus, n) {
  for (let i = 0; i < n; i++) {
    console.log(writeLine(corpus, 5));
  }
}

// Fixed stuff when Chuck went over it and idk if it is working correctly.
// Works better than before that's for sure.

generatePoem(text, 5);
