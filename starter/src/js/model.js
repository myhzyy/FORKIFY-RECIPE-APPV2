import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  title: {},
  search: {
    query: '',
    results: [],
  },
};

console.log(state.recipe);

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    console.log(data);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} !!!`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });

    console.log(state.search.query, state.search.results);
  } catch (err) {
    console.error(`${err} !!!`);
    throw err;
  }
};

loadSearchResults('pizza');

/// loadSearchResults is an async function that takes in a query

/// this gets the API_URL from the config module
/// our query then fills the rest of the query in, making a full URL

/// once that data object is returned,
/// we map over the data.recipes, and call each of the arrays rec
/// we then rename them in here

/// these will then be stored in the state object as this stores all of our data

/// 2

/// we save this map into the state.search.results by adding it on line 48
/// we also make state.search.query = query
/// this stores the word 'pizza' in thr query
