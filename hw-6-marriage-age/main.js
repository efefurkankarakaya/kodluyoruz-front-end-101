const name = prompt("Name");
const marriageAge = prompt("Marriage");
const adultAge = 18;
const LIMIT = 35;

for (let age = 0; age <= LIMIT; age++) console.log((age == 0) ? `At age ${age}, the person has just born.` : (age == 18) ? `At age ${age}, the person has become an adult.` : (age == marriageAge) ? `At age ${age}, the person has just got married. Congratulations!` : `Time passes by..`);

