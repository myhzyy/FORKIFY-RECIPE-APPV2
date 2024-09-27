import * as model from './model.js';
import searchView from './Views/searchView.js';
import recipeView from './Views/recipeView.js';
import ResultsView from './Views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './Views/resultsView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    /// 1 Loading recipe
    await model.loadRecipe(id);

    console.log(model.state.recipe);

    /// 2 Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView);

    // 1 Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2 Load search results
    await model.loadSearchResults(query);
    // 3 Render results
    console.log(model.state.search.query, model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
