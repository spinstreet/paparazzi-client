import * as UI from '../actions/ui.js';

const init = {
  isLoading: false
}

const ui = (state = init, action: any = {}) => {
  switch (action.type) {

    case UI.START_LOADING:
      return Object.assign({}, state, {isLoading: true})

    case UI.STOP_LOADING:
      return Object.assign({}, state, {isLoading: false})

    default:
      return state;
  }
};

export default ui;
