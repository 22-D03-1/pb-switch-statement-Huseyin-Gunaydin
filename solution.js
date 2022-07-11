// write your code here

//Frage 1

const color = "blue";
switch (color) {
  case "red":
    console.log(`${color}, "a great color on you."`);
    break;

  case "blue":
    console.log(`${color},  " Blue? Great choice."`);
    break;

  case "green":
    console.log(`${color},  " Ok. Green it is"`);
    break;

  case "yellow":
    console.log(`${color},  " Not what I would have picked, but yellow is fine."`);
    break;

  default:
    console.log("The aim of the game is to pick a color.");
    break;
}

// Frage 2
const grade = "A";
switch (grade) {
  case "A":
    console.log("Well done!");
    break;

  case "B":
    console.log("Good on you");
    break;

  case "C":
    console.log("Good efford");
    break;

  case "D":
    console.log("Try harder next time...");
    break;

  default:
    console.log("Yikes...");
    break;
}

// Frage 3
const Früchte = "banana";
switch (grade) {
  case "banana":
    console.log("Bananas are full of potassium.");
    break;

  case "orange":
    console.log("Yep, oranges. Great choice.");
    break;

  case "strawberry":
    console.log("Mmmm...nothing better than strawberries");
    break;

  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;

  default:
    console.log("PICK A FRUIT");
    break;
}


//Frage4


const percentageComplete = 100;
if (percentageComplete <30){
    console-log(" Still a long way to go");
}
else if (percentageComplete>30 && percentageComplete<=50){
    console.log("Slowly getting there");
}
else if (percentageComplete>51 && percentageComplete<=80){
    console.log("You can do it!");
}
else if (percentageComplete>81 && percentageComplete<=99){
    console.log("This is the last push!");
}
else if (percentageComplete === 100){
    console.log("You're there. Well done!")
}
 





