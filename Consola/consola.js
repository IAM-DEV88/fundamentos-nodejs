const people = [
  { id: 1, name: "Juan", age: 30, city: "Madrid" },
  { id: 2, name: "Ana", age: 25, city: "Barcelona" },
  { id: 3, name: "Luis", age: 35, city: "Valencia" },
];

function sample1() {
    console.group("--- sample 1");
    console.log("🤖 Hola");
    console.log("bla bla bla... 💭");
    console.count('contar')
    sample2()
    console.groupEnd("--- sample 1");
}

function sample2() {
    console.group("--- sample 2");
    console.count('contar')
    console.log("bla bla bla... 💭");
    console.log("bla bla bla... 💭");
    console.groupEnd("--- sample 2");
  }

console.group("inicio");
console.log(people);
console.info(people);
console.groupEnd("fin");
console.table(people);
sample1()


console.count('contar')
console.count('contar')
console.count('contar')
console.count('contar')
