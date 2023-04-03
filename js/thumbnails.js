import { openBigPicture } from './big-picture.js';
import { getData } from './api.js';

const ERROR_TIMEOUT = 5000;
const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const container = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const picturesGenerated = (item) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = item.url;
  thumbnail.querySelector('.picture__img').alt = item.description;
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.querySelector('.picture__comments').textContent =
    item.comments.length;
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(item);
  });
  return thumbnail;
};

const renderThumbnails = (data) => {
  data.forEach((item) => container.append(picturesGenerated(item)));
};

const onGetSuccess = (data) => renderThumbnails(data);
const onGetFail = () =>{
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '60px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '20px';
  errorBlock.style.backgroundColor = 'black';
  errorBlock.textContent = 'Произошла ошибка загрузки';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT)
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export { getPicturesData };
