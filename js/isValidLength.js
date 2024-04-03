const isValidLength = (str, maxLength) => str.length <= maxLength;

// Cтрока короче 20 символов
console.log(isValidLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(isValidLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(isValidLength('проверяемая строка', 10)); // false
