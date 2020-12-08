
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
 let num1 = parseInt(prompt("Enter a number:"));
 let num2 = parseInt(prompt("Enter a second number:"));
 let total = 0;
 
 const multiplication = (num1, num2) => {
   for (let i = 0; i < num2; i++){
     total += num1
     }
   return total
 }
 
 const answer1 = multiplication(num1, num2)
 console.log('answer1', answer1)
 
 const htmlTarget = document.getElementById('a-1')
 htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
let word = prompt("Enter a word:");


vowelOrConsonant = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var letters = word.split('');
  var vowelsFound = [], consonantsFound = [];

  for (var i in letters) {
      if (vowels.includes(letters[i])) {
          vowelsFound.push(letters[i]);
      } else {
          consonantsFound.push(letters[i]);
      }
  }

  let choice = prompt("Do you want the vowels first or consonants first? For vowels enter 'vowels' or for consonants enter 'consonants'.");
  if (choice == "vowels"){
    console.log("Vowels:", vowelsFound.join(""));
    return vowelsFound
  } else {
    console.log("Consonants:", consonantsFound.join(""));
    return consonantsFound
  }
}

const answer2 = vowelOrConsonant(word)

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
let player = prompt("Enter your name:");

guessTheNumber = (player) => {
  let lives = 3 
  let randomNumber = Math.floor(Math.random() * 50) + 10,
    guess,
    text = 'Guess a number: ';
  do {
    guess = prompt(text);
    if (randomNumber < guess) {
        lives--
        text = `You've guessed ${guess} too high! You have ${lives} left!`; 
    } if (lives == 0){
      alert(`Game Over! The correct number was: ${randomNumber}`)
      return
    } else if (randomNumber > guess) {
        lives-- 
        text = `You've guessed ${guess} too low! You have ${lives} left!`; 
    }
  } 
  while (guess != randomNumber) {
    alert(`Congratulations, ${player.toUpperCase()}!`) 
    return
  }
} 

const answer3 = guessTheNumber(player)

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"
let list = prompt("Do you want to sort by title, author or library");

sort = (list) => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   function compare_to_sort_title(x,y) {
     if (x.title < y.title)
        return -1;
      if (x.title > y.title)
        return 1;
        return 0;
    }


    function compare_to_sort_author(x,y) {
      if (x.author < y.author)
         return -1;
       if (x.author > y.author)
         return 1;
         return 0;
     }


     function compare_to_sort_libraryID(x,y) {
      if (x.libraryID < y.libraryID)
         return -1;
       if (x.libraryID > y.libraryID)
         return 1;
         return 0;
     }

  do {
    if (list = "title") {
      console.log(library.sort(compare_to_sort_title));
    }  else if (list == "library") {
      console.log(library.sort(compare_to_sort_libraryID));
    }
  } 
  while (list != "author") {
    console.log(library.sort(compare_to_sort_author));
    }
}


const answer4 = sort(list)

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
