const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const DEFAULT_NAME = 'Anonymous';

const onChangeInputName = evt => {
  const normalizedInput = evt.currentTarget.value.trim();

  refs.outputName.textContent = normalizedInput || DEFAULT_NAME;
};

refs.inputName.addEventListener('input', onChangeInputName);
