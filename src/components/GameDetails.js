import React from "react";
import { useHistory } from "react-router-dom";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//REDUX
import { useSelector } from "react-redux";

import { smallImage } from "../util";

const GameDetails = () => {
  const history = useHistory();
  //EXIT DETAIL
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
    // console.log(e);
  };
  //DATA
  const { game, screen, isLoading } = useSelector((state) => state.details);

  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitDetailsHandler}>
          <StyledDetails>
            <StyledStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatform>
                  {game.platforms?.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </StyledPlatform>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screen.results?.map((data) => (
                <img
                  src={smallImage(data.image, 1280)}
                  key={data.id}
                  alt={game.name}
                />
              ))}
            </div>
          </StyledDetails>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  /* pointer-events: none; */

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledDetails = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
    /* display: block; */
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 60vh;
    object-fit: cover; */
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
