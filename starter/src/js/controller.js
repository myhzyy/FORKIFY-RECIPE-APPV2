import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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

/// recipeView.renderError is called if something is in the catch block

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
