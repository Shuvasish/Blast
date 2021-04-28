import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//REDUX
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

//COMPONENTS
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET BACK DATA FROM STORE
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  // console.log(popular, newGames, upcoming);

  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetails></GameDetails>}

      {searched.length > 0 && (
        <div className="searched">
          <h2>Searched Games</h2>
          <StyledGames>
            {searched.map((game) => (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              ></Game>
            ))}
          </StyledGames>
        </div>
      )}

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
