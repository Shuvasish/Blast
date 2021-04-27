import React, { useEffect } from "react";

//REDUX
import { loadGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
