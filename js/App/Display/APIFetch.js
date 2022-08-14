export let recipesData;

const APIFetch = () => {
  fetch('https://mealrush-api.herokuapp.com/recipes')
    .then(res => res.json())
    .then(data => (recipesData = data));
};

APIFetch();
