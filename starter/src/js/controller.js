import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './Views/searchView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

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
    const query = searchView.getQuery();
    if (!query) return;

    /// the query is equal to the searchView.getQuery, which is the value of
    /// the search bar

    /// if there's no query, then just return

    /// the query is then passed into the model.loadSearchResults
    /// this query will finish the last part of the hashchange

    await model.loadSearchResults(query);
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
