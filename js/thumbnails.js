import {createPhotos} from './data.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const picturesGenerated = createPhotos();

picturesGenerated.forEach((data) => {
  const pictureAdded = pictureTemplate.cloneNode(true);
  pictureAdded.querySelector('.picture__img').src = data.url;
  pictureAdded.querySelector('.picture__img').alt = data.description;
  pictureAdded.querySelector('.picture__likes').textContent = data.likes;
  pictureAdded.querySelector('.picture__comments').textContent = data.comments.length;
  picturesFragment.appendChild(pictureAdded);
});

const renderThumbnails = () => container.appendChild(picturesFragment);

export {renderThumbnails};
