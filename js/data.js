import { getRandomInteger, getRandomArrayElement } from "./utils.js";

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const NAMES = ['Лера','Катя','Женя','Рома','Денис','Настя','Оля','Вася',];
const DESCRIPTIONS = ['С лучшим другом.','В отпуске.','Красиво.','Отдых.','Первый снег.','Погода не радует.',];

let commentId = 1;
let photoId = 1;

const createComment = () =>({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: Array.from(new Set(Array.from({length: getRandomInteger(1,2)},() => getRandomArrayElement(MESSAGES)))).join(' '),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: photoId,
  url:`photos/${photoId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length:getRandomInteger(1,25)},createComment),
});

const createPhotos = () => Array.from({length:25}, createPhoto);

export {createPhotos};
