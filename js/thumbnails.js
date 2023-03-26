import { createPhotos } from './data.js';
import { openBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const data = createPhotos();

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

const renderThumbnails = () =>
  data.forEach((item) => container.append(picturesGenerated(item)));

export { renderThumbnails };
