let length = parseInt(prompt("Введіть довжину масиву:"));
let arr = [];

for (let i = 0; i < length; i++) {
  let element = prompt(`Введіть ${i+1}-й елемент масиву:`);
  arr.push(element);
}

arr.sort();

console.log(arr);

arr.splice(1, 4);

console.log(arr);

document.write(`Початковий масив: ${arr}<br>`);
document.write(`Відсортований масив: ${arr.sort()}<br>`);
arr.splice(1, 4);
document.write(`Масив з видаленими елементами з 2 по 4: ${arr}`);