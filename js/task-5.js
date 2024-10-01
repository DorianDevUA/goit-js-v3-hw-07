const refs = {
  documentBody: document.body,
  changeColorBtn: document.querySelector('button.change-color'),
  outputColor: document.querySelector('span.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickChangeColorBtn() {
  const randomHexColor = getRandomHexColor();

  refs.documentBody.style.backgroundColor = randomHexColor;
  refs.outputColor.textContent = randomHexColor;
}

refs.changeColorBtn.addEventListener('click', onClickChangeColorBtn);
