const findTheOldest = function(people) {
  let oldest = {};
  let highestAge = 0;
  const currentYear = parseInt(new Date().getFullYear());
  for (let person of people) {
    const year = person.yearOfDeath ? person.yearOfDeath : currentYear;
    const age = year - person.yearOfBirth;
    if (age > highestAge) {
      highestAge = age;
      oldest = person;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
