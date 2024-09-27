import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
}

export default new ResultsView();

/// the ReseultsView takes the properties and methods from the View
/// which means we will have access to these values and functions

/// the View is awaiting _parentElement to perform some functions
/// but it does not inherantly have that stored on the View itself
/// so when we passed the parent element in, will give it access to what to pass in
/// to these functions
