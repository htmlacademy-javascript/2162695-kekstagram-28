const COMMENT_ID_COUNT = 50;
const AVATAR_COUNT = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const NAMES = ['Лера','Катя','Женя','Рома','Денис','Настя','Оля','Вася',];
const PHOTO_ID_COUNT = 25;
const DESCRIPTION = ['С лучшим другом.','В отпуске.','Красиво.','Отдых.','Первый снег.','Погода не радует.',];
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () =>({
  id: createRandomIdFromRangeGenerator(1,COMMENT_ID_COUNT),
  avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
  message: Array.from({length: getRandomInteger(1,2)},() => getRandomArrayElement(MESSAGES)),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: createRandomIdFromRangeGenerator(1,PHOTO_ID_COUNT),
  url:`photos/${createRandomIdFromRangeGenerator(1,PHOTO_ID_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN_COUNT,LIKES_MAX_COUNT),
  comments: Array.from({length:getRandomInteger(1,PHOTO_ID_COUNT)},createComment),
});

const photo = () => Array.from({length:PHOTO_ID_COUNT}, createPhoto);


