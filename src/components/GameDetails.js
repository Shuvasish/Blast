import React from "react";
import { useHistory } from "react-router-dom";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//REDUX
import { useSelector } from "react-redux";

import { smallImage } from "../util";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

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

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
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
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.id}
                    />
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
