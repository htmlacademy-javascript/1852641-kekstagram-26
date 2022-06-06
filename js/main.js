const getRandomNumber = (min, max) => {
  if (min > max || min === max || min < 0 || max < 0) {
    console.log('Ой... Что-то пошло не так!');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function maxLength (string, length) {
  return string.length === length;
}


