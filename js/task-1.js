const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}`);
  console.log(`Elements: ${lastElementChild.childElementCount}`);
  // console.log(`Elements: ${lastElementChild.children.length}`);
});
