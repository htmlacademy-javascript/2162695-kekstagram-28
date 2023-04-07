import {isEscape} from './utils.js';

const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
let failMessageClone;
let successMessageClone;

const closeFailMessage = () => {
  failMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  failMessageClone = '';
};

const closeSuccessMessage = () => {
  successMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  successMessageClone = '';
};

function onDocumentKeydown(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    if (failMessageClone) {
      closeFailMessage();
      return;
    }
    closeSuccessMessage();
  }
}

const onFailMessageButtonClick = (evt) => {
  evt.preventDefault();
  closeFailMessage();
};
const onSuccessMessageButtonClick = (evt) => {
  evt.preventDefault();
  closeSuccessMessage();
};

const onFailMessageClick = (evt) => {
  if (evt.target.closest('.error_inner')) {
    closeFailMessage();
  }
};

const onSuccessMessageClick = (evt) => {
  if (evt.target.closest('.success_inner')) {
    closeSuccessMessage();
  }
};

const renderFailMessage = () => {
  failMessageClone = failMessageTemplate.cloneNode(true);
  document.body.append(failMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  failMessageClone.querySelector('.error__button').addEventListener('click', onFailMessageButtonClick);
  failMessageClone.addEventListener('click', onFailMessageClick);
};

const renderSuccessMessage = () => {
  successMessageClone = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  successMessageClone.querySelector('.success__button').addEventListener('click', onSuccessMessageButtonClick);
  successMessageClone.addEventListener('click', onSuccessMessageClick);
};

export {renderFailMessage, renderSuccessMessage};
