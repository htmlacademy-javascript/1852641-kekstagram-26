const getRandomNumber = (min, max) => {
  if (min > max || min === max || min < 0 || max < 0) {
    return 'Ой... Что-то пошло не так!';
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
const maxLength = (string, length) => string.length === length;

getRandomNumber(2, 5);
maxLength('hello', 5);
