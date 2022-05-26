const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItemAdd = ingredients.map((ingredient) => {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.textContent = ingredient;
  ingredientsItemRef.classList.add("item");

  return ingredientsItemRef;
});

const ingredientsListRef = document.querySelector("#ingredients");

ingredientsListRef.append(...ingredientsItemAdd);
