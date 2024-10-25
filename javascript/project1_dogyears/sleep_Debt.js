const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 7;
  } else if (day === "friday") {
    return 7;
  } else if (day === "saturday") {
    return 7;
  } else if (day === "sunday") {
    return 7;
  }
};

console.log(getSleepHours("sunday"));

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let over = actualSleepHours - idealSleepHours;
  let under = idealSleepHours - actualSleepHours;
  if (actualSleepHours == idealSleepHours) {
    console.log("perfect sleep !!!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "you need to sleep less son, you are over sleeping by " + over + " hours"
    );
  } else {
    console.log(
      "nah nah sleep more my boy, you are under sleeping by " + under + " hours"
    );
  }
};

calculateSleepDebt();
