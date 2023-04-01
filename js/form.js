import { activeScale, resetScale } from './form-scale.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');

const onDocumentKeydown = (evt) =>{
  if (evt.key === 'Escape' && !evt.target.closest('.text_hashtags') && !evt.target.closest('.text_description')){
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => closeModal();
const onFileInputChange = () => openModal();

const onFormSubmit = (evt) =>{
  evt.preventDefault();
};

const openModal = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown',onDocumentKeydown);
};

function closeModal() {
  form.reset();
  resetScale();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown',onDocumentKeydown);
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
  activeScale();
};

export {addFormAction};
