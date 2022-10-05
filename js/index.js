// Iteration 1: Names and

let hacker1 = "Ivana";
let hacker2 = "Marco";
console.log(`The dirver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}   else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}   else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)}

// Iteration 3: Loops

let newHacker1 = ""
let letters
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
    letters = hacker1[i].toUpperCase();
    newHacker1 += letters + " ";
}

console.log(newHacker1.slice(0, -1));

let newHacker2 = ""
for (let i = hacker2.length -1; i >= 0; i--) {
    console.log(hacker2[i]);
    newHacker2 += hacker2[i];
}

console.log(newHacker2);

// easy aproach

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker2 === hacker1) {
    console.log(`What?! You both have the same name?`);
}

//complex aproach (doesn't work with Ivan and Ivana!) 


/* for (let i = 0; i <= hacker1.length; i++) {

if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}   else if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
} else if (hacker2[i] < hacker1[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
}
else if (hacker2[i] === hacker1[i]) {
    continue;
}
} */

