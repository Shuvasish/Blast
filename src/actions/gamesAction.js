import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  //   console.log(popularData);
  console.log(upcomingGamesURL());
  console.log(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};
