(function (window) {

  const gamesMock = [
    {
      title: "Need for Speed",
      cover:
        "https://images.g2a.com/newlayout/600x351/1x1x0/c0eb233b79d8/59e5d4a35bafe3d58b599178"
    },
    {
      title: "Call of Duty - Black Ops 3",
      cover:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcjH7Y0zrFAw6OK32H4ByBTK3XKBmgscHXo2gFp5bhlVMCJ0S9DMEtsxlV2j94BH3xtBQoMsS4TJj0E_75Y5LVUV5WwNsVlqlbKsH9Dl33kbiGbJ8uIgWjti39pnToIE_DIA89QtDDnOZ8Q1wP6PwwE3dVPn5p7OCJccq1AEZRaO0-&format=jpg"
    },
    {
      title: "The Last of Us",
      cover:
        "http://gamehall.uol.com.br/meialua/wp-content/uploads/2014/09/The-last-of-us.jpg"
    },
    {
      title: "Destiny",
      cover:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc1ToETtpPwWtAjk.8Hf10b20KiBepqCWyFqz4nk2DCZsBxpsnBsQ97BxU2lNec1Ug4HC4t9Ngq1LRDUz.UiPPPzolRFd7YwX20GxTzDLpvM63XpjyYif6k5s1KJ6Kbe753mSFatOASuDLISOPBooT_C4T8O.wgtCcm.eCKPwSUmY-&format=jpg"
    },
    {
      title: "Far Cry 4",
      cover:
        "http://www.gameforfun.com.br/wp-content/uploads/2015/03/Far-Cry-4.jpg"
    },
    {
      title: "The Witcher 3",
      cover:
        "http://www.meups4.com.br/wp-content/uploads/2015/04/The-Witcher-3-Wild-Hunt1.jpg"
    },
    {
      title: "Need for Speed",
      cover:
        "http://static.omelete.uol.com.br/media/extras/conteudos/need_for_speed_2015_gameplay.jpg"
    },
    {
      title: "Call of Duty - Black Ops 3",
      cover:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcjH7Y0zrFAw6OK32H4ByBTK3XKBmgscHXo2gFp5bhlVMCJ0S9DMEtsxlV2j94BH3xtBQoMsS4TJj0E_75Y5LVUV5WwNsVlqlbKsH9Dl33kbiGbJ8uIgWjti39pnToIE_DIA89QtDDnOZ8Q1wP6PwwE3dVPn5p7OCJccq1AEZRaO0-&format=jpg"
    },
    {
      title: "The Last of Us",
      cover:
        "http://gamehall.uol.com.br/meialua/wp-content/uploads/2014/09/The-last-of-us.jpg"
    },
    {
      title: "Destiny",
      cover:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc1ToETtpPwWtAjk.8Hf10b20KiBepqCWyFqz4nk2DCZsBxpsnBsQ97BxU2lNec1Ug4HC4t9Ngq1LRDUz.UiPPPzolRFd7YwX20GxTzDLpvM63XpjyYif6k5s1KJ6Kbe753mSFatOASuDLISOPBooT_C4T8O.wgtCcm.eCKPwSUmY-&format=jpg"
    },
    {
      title: "Far Cry 4",
      cover:
        "http://www.gameforfun.com.br/wp-content/uploads/2015/03/Far-Cry-4.jpg"
    },
    {
      title: "The Witcher 3",
      cover:
        "http://www.meups4.com.br/wp-content/uploads/2015/04/The-Witcher-3-Wild-Hunt1.jpg"
    }
  ];


  const initialState = {
    games: gamesMock,
    active: 0
  };

  const Games = (state = initialState, action) => {

    switch (action.type) {
      case 'LIKE_GAME':
        return {
          active: state.active + 1,
          games: state.games.map((game, index) => {
            if (action.active == index)
              return Object.assign({}, game, {
                liked: true
              });

            return game;
          })
        };

      case 'DISLIKE_GAME':
        return {
          active: state.active + 1,
          games: state.games.map((game, index) => {
            if (action.active == index)
              return Object.assign({}, game, {
                disliked: true
              });

            return game;
          })
        };

      case 'SEE_LATER_GAME':
        return {
          active: state.active + 1,
          games: state.games.map((game, index) => {
            if (action.active == index)
              return Object.assign({}, game, {
                seelater: true
              });

            return game;
          })
        }

      case 'LOAD_MORE_GAMES':
        return Object.assign({}, state, {
          games: state.games.concat(gamesMock)
        });

      default:
        return state;
    }
  };

  window.Reducers = window.Reducers || {};
  window.Reducers.Games = Games;
})(window);
