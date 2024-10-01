const refs = {
  inputBoxesAmount: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreateBtn() {
  destroyBoxes();
  const amount = Number(refs.inputBoxesAmount.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  createBoxes(amount);
  refs.inputBoxesAmount.value = '';
}

function onClickDestroyBtn() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  const boxSizeStep = 10;
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    boxes.push(box);
    boxSize += boxSizeStep;
  }

  refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

refs.createBtn.addEventListener('click', onClickCreateBtn);
refs.destroyBtn.addEventListener('click', onClickDestroyBtn);
