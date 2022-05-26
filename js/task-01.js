const categoriesListRef = document.querySelector("#categories");
console.log("Number of categories: ", categoriesListRef.children.length);

const categoriesListTitleRef = document.querySelectorAll(".item h2");

const categoriesListNameRef = document.querySelectorAll(".item ul");

for (let i = 0; i < categoriesListTitleRef.length; i += 1) {
  console.log(`Category: ${categoriesListTitleRef[i].textContent}`);
  console.log(`Elements: ${categoriesListNameRef[i].children.length}`);
}
