// switch statements = alternative ways of writing complicated if/else statements

const day = "thursday";

switch (day) {
  case "monday":  // day === "monday"
    console.log("Learn JavaScript");
    console.log("Attend a coding meetup");
    break;
  case "tuesday":
    console.log("Work on projects");
    break;
  case "wednesday":
  case "thursday":
    console.log("Watch tutorials");
    break;
  case "friday":
    console.log("Learn React");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend")
    break;
  default:
    console.log("Not a valid day!");
}

// same as above but now with if / else if statements

if (day === "monday") {
  console.log("Learn JavaScript");
  console.log("Attend a coding meetup");
} else if (day === "tuesday") {
  console.log("Work on projects");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Watch tutorials");
} else if (day === "friday") {
  console.log("Learn React");
} else if (day === "saturday" || day === "saturday") {
  console.log("Enjoy the wekend");
}
