(function (window) {
  'use strict';

  const { combineReducers, createStore, applyMiddleware } = Redux;

  const Gaminder = combineReducers({
    games: Reducers.Games
  });

  window.Store = window.Store || {};
  window.Store.Gaminder = createStore(Gaminder);
})(window);