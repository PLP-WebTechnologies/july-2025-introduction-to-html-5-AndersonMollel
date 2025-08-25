// Part 1: Variables na Conditionals
let age = 23; // umri
const name = "Kisiri"; // jina

if (age >= 18) {
  console.log(name + " ni mtu mzima.");
} else {
  console.log(name + " bado ni mtoto.");
}
// Part 2: Functions
function add(a, b) {
  return a + b;
}
function greet(user) {
  console.log("Habari " + user + "!");
}

greet(name);
console.log("Jumla ni: " + add(2, 3));

// Part 3: Loops
for (let i = 1; i <= 3; i++) {
  console.log("Namba " + i);
}
let x = 1;
while (x <= 2) {
  console.log("Count: " + x);
  x++;
}
// Part 4: DOM Interactions
// kubadilisha maandishi na rangi ya header
document.querySelector(".title").innerText = "Karibu " + name;
document.getElementById("header").style.backgroundColor = "lightgreen";

// 3. Ongeza paragraph mpya kwa 'about'
let p = document.createElement("p");
p.innerText = "Hii imeongezwa kwa JS.";
document.getElementById("about").appendChild(p);
