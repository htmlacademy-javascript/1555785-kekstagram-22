// const getNumber = function (lowerLimit, upperLimit) {
//   if (lowerLimit < 0 || upperLimit < 0) {
//     return new Error('Аргумент может быть только положительным числом, включая ноль');
//   }
//   if (upperLimit <= lowerLimit) {
//     return new Error('Значение второго аргумента должно быть больше значения первого аргумента');
//   }
//   lowerLimit = Math.ceil(lowerLimit);
//   upperLimit = Math.floor(upperLimit);
//   return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
//   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// };

// const validateStringLength = function (stringToCheck, maxLength) {
//   if (typeof stringToCheck !== 'string') {
//     return new Error('Первый аргумент функции должен иметь тип "string"');
//   }
//   if (maxLength < 0) {
//     return new Error('Значение длины строки должно быть положительным числом, включая ноль');
//   }
//   return (stringToCheck.length <= maxLength) ? true : false;
// };

// const isEscEvent = (evt) => {
//   return evt.key === ('Escape' || 'Esc');
// };

// const isEnterEvent = (evt) => {
//   return evt.key === 'Enter';
// };

// const extractPath = (string) => {
//   return new URL(string).pathname;
// };

// const markField = (element) => {
//   const currentOutlineStyle = element.style.outline;
//   const changeOutlineStyle = (outlineStyle) => {
//     if (outlineStyle) {
//       element.style.outline = outlineStyle;
//       return undefined;
//     } else {
//       element.style.outline = currentOutlineStyle;
//     }
//     return undefined;
//   };
//   return changeOutlineStyle;
// };

// const onTextFieldKeydown = (evt) => {
//   if (isEscEvent) {evt.stopPropagation()}
// };

// const cloneErrorNode = () => {
//   const errorBlock = document.querySelector('#error')
//     .content
//     .querySelector('.error');
//   const newError = errorBlock.cloneNode(true);
//   const errorTitle = newError.querySelector('.error__title');
//   const errorButton = newError.querySelector('.error__button');
//   return [newError, errorTitle, errorButton];
// };

// const cloneSuccessNode = () => {
//   const successBlock = document.querySelector('#success')
//     .content
//     .querySelector('.success');
//   const newSuccess = successBlock.cloneNode(true);
//   const successTitle = newSuccess.querySelector('.success__title');
//   const successButton = newSuccess.querySelector('.success__button');
//   return [newSuccess, successTitle, successButton];
// };

// const showMessage = () => (error, params = {}) => {
//   const main = document.querySelector('main');
//   const fragment = document.createDocumentFragment();
//   let newNode = null;
//   let newNodeButton = null;

//   if (error) {
//     const [newError, errorTitle, errorButton] = cloneErrorNode();
//     if (params.title) {
//       errorTitle.innerText = params.title;
//     }
//     if (params.button) {
//       errorButton.innerText = params.button;
//     }
//     newNode = newError;
//     newNodeButton = errorButton;
//   } else {
//     const [newSuccess, successTitle, successButton] = cloneSuccessNode();
//     if (params.title) {
//       successTitle.innerText = params.title;
//     }
//     if (params.button) {
//       successButton.innerText = params.button;
//     }
//     newNode = newSuccess;
//     newNodeButton = successButton;
//   }

//   fragment.appendChild(newNode);
//   main.appendChild(fragment);

//   const onMessageButtonClick = () => {
//     main.removeChild(newNode);
//     document.removeEventListener('click', onDocumentClick);
//     document.removeEventListener('keydown', onDocumentEscKeydown);
//     return undefined;
//   };
//   const onDocumentClick = (evt) => {
//     if (evt.target.className.match(/^error$/) || evt.target.className.match(/^success$/)) {
//       onMessageButtonClick();
//     }
//     return undefined;
//   };
//   const onDocumentEscKeydown = (evt) => {
//     if (isEscEvent(evt)) {onMessageButtonClick()}
//     return undefined;
//   };

//   newNodeButton.addEventListener('click', onMessageButtonClick, {once: true});
//   document.addEventListener('click', onDocumentClick);
//   document.addEventListener('keydown', onDocumentEscKeydown);
//   return undefined;
// };

// const debounce = (func, ms) => {
//   let timerId = null;
//   return function () {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func.apply(this, arguments);
//     }, ms);
//     return undefined;
//   }
// };

// export {
//   getNumber,
//   validateStringLength,
//   isEscEvent,
//   isEnterEvent,
//   extractPath,
//   markField,
//   onTextFieldKeydown,
//   showMessage,
//   debounce
// };

//------------------------------------------------------------------------------------------

class Utility {
  constructor () {
    this.getNumber = this.getNumber.bind(this);
    this.validateStringLength = this.validateStringLength.bind(this);
    this.isEscEvent = this.isEscEvent.bind(this);
    this.isEnterEvent = this.isEnterEvent.bind(this);
    this.extractPath = this.extractPath.bind(this);
    this.markField = this.markField.bind(this);
    this.onTextFieldKeydown = this.onTextFieldKeydown.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  getNumber (lowerLimit, upperLimit) {
    if (lowerLimit < 0 || upperLimit < 0) {
      return new Error('Аргумент может быть только положительным числом, включая ноль');
    }
    if (upperLimit <= lowerLimit) {
      return new Error('Значение второго аргумента должно быть больше значения первого аргумента');
    }
    lowerLimit = Math.ceil(lowerLimit);
    upperLimit = Math.floor(upperLimit);
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }

  validateStringLength (stringToCheck, maxLength) {
    if (typeof stringToCheck !== 'string') {
      return new Error('Первый аргумент функции должен иметь тип "string"');
    }
    if (maxLength < 0) {
      return new Error('Значение длины строки должно быть положительным числом, включая ноль');
    }
    return (stringToCheck.length <= maxLength) ? true : false;
  }

  isEscEvent (evt) {
    return evt.key === ('Escape' || 'Esc');
  }

  isEnterEvent (evt) {
    return evt.key === 'Enter';
  }

  extractPath (string) {
    return new URL(string).pathname;
  }

  markField (element) {
    const currentOutlineStyle = element.style.outline;
    const changeOutlineStyle = (outlineStyle) => {
      if (outlineStyle) {
        element.style.outline = outlineStyle;
        return undefined;
      } else {
        element.style.outline = currentOutlineStyle;
      }
      return undefined;
    };
    return changeOutlineStyle;
  }

  onTextFieldKeydown (evt) {
    if (this.isEscEvent) {evt.stopPropagation()}
  }

  static cloneErrorNode () {
    const errorBlock = document.querySelector('#error')
      .content
      .querySelector('.error');
    const newError = errorBlock.cloneNode(true);
    const errorTitle = newError.querySelector('.error__title');
    const errorButton = newError.querySelector('.error__button');
    return [newError, errorTitle, errorButton];
  }

  static cloneSuccessNode () {
    const successBlock = document.querySelector('#success')
      .content
      .querySelector('.success');
    const newSuccess = successBlock.cloneNode(true);
    const successTitle = newSuccess.querySelector('.success__title');
    const successButton = newSuccess.querySelector('.success__button');
    return [newSuccess, successTitle, successButton];
  }

  showMessage () {
    return function (error, params = {}) {
      const main = document.querySelector('main');
      const fragment = document.createDocumentFragment();
      let newNode = null;
      let newNodeButton = null;

      if (error) {
        const [newError, errorTitle, errorButton] = Utility.cloneErrorNode();
        if (params.title) {
          errorTitle.innerText = params.title;
        }
        if (params.button) {
          errorButton.innerText = params.button;
        }
        newNode = newError;
        newNodeButton = errorButton;
      } else {
        const [newSuccess, successTitle, successButton] = Utility.cloneSuccessNode();
        if (params.title) {
          successTitle.innerText = params.title;
        }
        if (params.button) {
          successButton.innerText = params.button;
        }
        newNode = newSuccess;
        newNodeButton = successButton;
      }

      fragment.appendChild(newNode);
      main.appendChild(fragment);

      const onMessageButtonClick = () => {
        main.removeChild(newNode);
        document.removeEventListener('click', onDocumentClick);
        document.removeEventListener('keydown', onDocumentEscKeydown);
        return undefined;
      };
      const onDocumentClick = (evt) => {
        if (evt.target.className.match(/^error$/) || evt.target.className.match(/^success$/)) {
          onMessageButtonClick();
        }
        return undefined;
      };
      const onDocumentEscKeydown = (evt) => {
        if (this.isEscEvent(evt)) {onMessageButtonClick()}
        return undefined;
      };

      newNodeButton.addEventListener('click', onMessageButtonClick, {once: true});
      document.addEventListener('click', onDocumentClick);
      document.addEventListener('keydown', onDocumentEscKeydown);
      return undefined;
    }
  }

  debounce (func, ms) {
    let timerId = null;
    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, ms);
      return undefined;
    }
  }
}

const util = new Utility();

export {
  util
};
