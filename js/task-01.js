const categoriesListRef = document.querySelector("#categories");
console.log("Number of categories: ", categoriesListRef.children.length);

const allLiItem = document.querySelectorAll(".item");
allLiItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
