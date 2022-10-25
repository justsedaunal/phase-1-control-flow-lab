function scuberGreetingForFeet(num) {
  // Write your code here!
  if (num <= 400) {
    return "This one is on me!";
  } else if (num > 400 && num <= 2000) {
    return "That will be twenty bucks.";
  } else if (num > 2500) {
    return "No can do.";
  } else if (num > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city == `NYC` ? "Ok, sounds good." : "No go.";
}

// function getFee(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }

function switchOnCharmFromTip(type) {
  // Write your code here!
  switch (type) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "thanks for everything":
      return "Bye.";
  }
}
