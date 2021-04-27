import React from "react";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

function Game({ id, name, released, image }) {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  /* background: red; */
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    display: block;
    object-fit: cover;
  }
`;
export default Game;
