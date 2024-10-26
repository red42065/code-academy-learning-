// Write your function here:

const howOld = (age, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let birthYear = currentYear - age;

  if (birthYear > year) {
    return `The year ${year} was ${
      birthYear - year
    } years before you were born`;
  } else {
    if (year - birthYear > age) {
      return `You will be ${year - birthYear} in the year ${year}`;
    } else if (year - birthYear < age) {
      return `You were ${year - birthYear} in the year ${year}`;
    }
  }
};

// Once your function is written, write function calls to test your code!

console.log(howOld(23, 2020));
