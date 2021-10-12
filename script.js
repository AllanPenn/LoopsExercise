for (i = 1; i <= 7; i++){
  console.log(i);
};
for (j = 5; j <= 25; j += 4){
  console.log(j);
};
const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley"
];
for (char of wizards){
  console.log(char);
};
let harryPotterMovies = 0;
while (harryPotterMovies < 8){
  harryPotterMovies++
}
console.log(harryPotterMovies);

// BONUS
const hogwartsHouses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin"
];
for (houses of hogwartsHouses){
  for (letters of houses){
    console.log(letters);
  }
}
const quote = [
  "Yer",
  "A",
  "Wizard",
  "Harry"
];
let sentence = "";
while (quote != sentence){
  console.log(quote.join(" "));
  break;
}