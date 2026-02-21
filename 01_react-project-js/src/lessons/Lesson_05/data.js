// Повторение метода map()
// Пример: создать новый массив на основании numbers, где каждый элемент нового массива будет умножен на 2
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value, index, arr) => {
  return value * 2;
});

const numbers1 = [1, 2, 3, 4, 5];

const newNumbers1 = [];

numbers1.forEach((value, index, arr) => {
  newNumbers1.push(value * 2);
});

console.log(newNumbers);
console.log(newNumbers1);

const names = ['Семен', 'Иван', 'Петр', 'Татьяна'];
const ages = [18, 27, 74, 34];

const namesWithAge = names.map((name, index) => {
  return `${name} ${ages[index]} лет.`;
});

console.log(namesWithAge);
