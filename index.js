console.log("ES1_HW_4");
console.log("\n");

const car = { brand: "Toyota", model: "Corolla" };

console.log("1.1", car.brand);
console.log("1.2", car.model);

car.brand = "Honda";

console.log(" 1.4", car);

car.year = 2022;

car.color = "blue";

for (const property in car) {
  console.log(`${property}: ${car[property]}`);
}

console.log("\n");
const citizen = { name: "Ramesh Kumar", age: 70, Occupation: "Retired" };

citizen.age = 68;

console.log("2.1 Updated Age: ", citizen.age);

citizen.age += 2;

console.log("2.2: updated age after adding 2: ", citizen.age);

citizen.city = "Delhi";

console.log("property of citizen object");
for (const property in citizen) {
  console.log(`${property}: ${citizen[property]}`);
}

console.log("\n");
const person = { name: "yashas", age: 22 };

person.bp = "Normal";

if (person.age > 60 && person.bp === "Normal") {
  console.log("Fit to travel.");
} else {
  console.log("Not Fit to travel.");
}
