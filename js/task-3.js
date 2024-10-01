const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const onChangeInputName = () => {
  const normalizedInput = refs.inputName.value.trim();
  const DEFAULT_NAME = 'Anonymous';

  refs.outputName.textContent = normalizedInput || DEFAULT_NAME;
};

refs.inputName.addEventListener('input', onChangeInputName);
