export let recipesData;

const APIFetch = () => {
  fetch("https://mealrush-api-production.up.railway.app/recipes")
    .then((res) => res.json())
    .then((data) => (recipesData = data));
};

APIFetch();
