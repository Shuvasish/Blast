import React from "react";
import { Link } from "react-router-dom";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

import { smallImage } from "../util";

function Game({ id, name, released, image }) {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
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
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    display: block;
    object-fit: cover;
  }
`;
export default Game;
