const findTheOldest = function(list) {
    let memory = 0;
    let personObj;

    list.forEach((person) => {
    const deathDate = person.yearOfDeath || new Date().getFullYear();
    const age = deathDate - person.yearOfBirth;

    if(age > memory){
        memory = age;
        personObj = person;
    }
    });
    return personObj;
};

// Do not edit below this line
module.exports = findTheOldest;
