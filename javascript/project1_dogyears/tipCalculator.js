// Write your function here:

const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return (total * 5) / 100;
      break;

    case "ok":
      return (total * 15) / 100;
      break;

    case "good":
      return (total * 20) / 100;
      break;

    case "excellent":
      return (total * 30) / 100;
      break;

    default:
      return (total * 18) / 100;
      break;
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
