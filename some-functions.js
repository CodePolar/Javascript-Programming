const items = [
  {name: "Bike", price: 100},
  {name: "TV", price: 200},
  {name: "Album", price: 10},
  {name: "Book", price: 5},
  {name: "Phone", price: 500},
  {name: "Computer", price: 1000},
  {name: "Keyboard", price: 25}
];

/* Filter Method */

console.log("Items",items);
const filteredArray = items.filter((val) => {
  return val.price <= 100;
})
console.log("Filter Array",filteredArray);

/* Map Method */

const itemsNames = items.map((item) => {
  return item.name;
})

console.log("Items Names",itemsNames);

/* Find Method */

const foundItem = items.find((item) => {
  return item.name === "Album";
})

console.log("Found Items",foundItem);

/* ForEach Method */
console.log("== ForEach Method ==");
items.forEach((item) => {
  console.log(item.name);
})

/* Some Method */

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 0;
})

console.log("HasInexpensiveItems",hasInexpensiveItems);







