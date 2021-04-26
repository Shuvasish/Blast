const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
