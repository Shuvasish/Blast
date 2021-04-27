import axios from "axios";
import { gameDetailsURL, gameScreenShotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAILS" });

  const detailsData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotsURL(id));
  console.log(gameScreenShotsURL());
  console.log(detailsData.data);
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailsData.data,
      screen: screenShotData.data,
    },
  });
};
