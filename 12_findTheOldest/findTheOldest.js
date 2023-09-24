const findTheOldest = function(peopleArray) {
    // Calculate each person's age - modify array
    peopleArray.map((person) => {
        if(!person.yearOfDeath) {
            person.age = 2023 - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    ageSorted = peopleArray.sort((person1, person2) => {
        return person1.age > person2.age ? -1 : 1;
    });

    oldestPerson = ageSorted[0];

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
