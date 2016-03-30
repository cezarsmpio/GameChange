
// View => Dispatch (Action) => Reducer => Store

(function (window, document) {
  'use strict';

  FastClick.attach(document.body);

  let Gaminder = Store.Gaminder;
  let state = Gaminder.getState();

  let gamesStore = state.games;
  let gamesList = gamesStore.games;

  // Elements
  Vue.use(VueTouch);

  let App = new Vue({
    el: '#app',
    data: {
      games: gamesList,
      active: gamesStore.active,
      later: 0
    },
    methods: {
      loadMoreGames: function() {
        return this.active == this.games.length - 3 ?
          Gaminder.dispatch(Actions.Games.loadMoreGames())
          :
          false;
      },

      dislikeGame: function() {
        this.loadMoreGames();

        Gaminder.dispatch(Actions.Games.dislikeGame(this.active));
      },

      likeGame: function() {
        this.loadMoreGames();

        Gaminder.dispatch(Actions.Games.likeGame(this.active));
      },

      seeLaterGame: function() {
        if (this.active < this.games.length - 1) {
          setTimeout(() => {
            App.later += 1;
          }, 1000);
        }

        this.loadMoreGames();

        Gaminder.dispatch(Actions.Games.seeLaterGame(this.active));
      },

      hasMoreGames: function() {
        return this.active >= this.games.length;
      }
    }
  });

  let render = () => {
    let state = Gaminder.getState();

    App.games = state.games.games;
    App.active = state.games.active;
  };

  Gaminder.subscribe(render);
  render();
})(window, document);