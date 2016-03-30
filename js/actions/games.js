(function (window) {

  const Games = {

    likeGame: active => {
      return {
        type: 'LIKE_GAME',
        active
      };
    },

    dislikeGame: active => {
      return {
        type: 'DISLIKE_GAME',
        active
      };
    },

    seeLaterGame: active => {
      return {
        type: 'SEE_LATER_GAME',
        active
      };
    },

    loadMoreGames: () => {
      return {
        type: 'LOAD_MORE_GAMES'
      };
    }

  };

  window.Actions = window.Actions || {};
  window.Actions.Games = Games;
})(window);