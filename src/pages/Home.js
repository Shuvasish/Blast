import React, { useEffect } from "react";

//REDUX
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//COMPONENTS
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET BACK DATA FROM STORE
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  // console.log(popular, newGames, upcoming);

  const item = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <StyledGameList variants={item} initial="hidden" animate="visible">
      <GameDetails></GameDetails>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          ></Game>
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          ></Game>
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          ></Game>
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  /* background: red; */
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyledGames = styled(motion.div)`
  /* background: red; */
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
