const HASHTAG_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;

const form = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');

const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidComment = (comment) => comment.length <= MAX_COMMENTS_LENGTH;

const createHashtagArray = (value) => value.trim().split(' ').filter((item) => item);

const isValidHashtag = (value) => {
  if (!value){
    return true;
  }

  const hashtags = createHashtagArray(value);

  return hashtags.every((hashtag) => HASHTAG_SYMBOLS.test(hashtag));
};

const isValidCount = (value) => {
  const hashtags = createHashtagArray(value);
  return hashtags.length <= MAX_HASHTAG_COUNT;
};

const isUniqueHashtags = (value) => {
  const hashtags = createHashtagArray(value);
  const uniqHashtag = new Set(hashtags);
  return uniqHashtag.size === hashtags.length;
};

const addValidator = () =>{
  pristine.addValidator(
    hashtagField,
    isValidHashtag,
    'Хэштег должен начинаться с "#", содержать буквы и цифры (не более 20 символов, включая #)',
  );

  pristine.addValidator(
    hashtagField,
    isUniqueHashtags,
    'Хэштеги не должены повторяться',
  );

  pristine.addValidator(
    hashtagField,
    isValidCount,
    'Нельзя указать больше пяти хэштегов',
  );

  pristine.addValidator(
    commentField,
    isValidComment,
    'Длина комментария не должна превышать 140 символов',
  );
};

const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export {addValidator,resetPristine,validatePristine};
