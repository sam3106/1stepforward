import styled from "styled-components";
import { Link } from "react-router-dom";

const handleSize = name => {
  switch (name) {
    case "Left":
      return "28px";
    case "Right":
      return "20px";
    default:
      return null;
  }
};
const handleDisplay = display => {
  switch (display) {
    case "Right":
      return "right";
  }
};
const handlePadding = (padding) => {
  switch (padding) {
    case "Right":
      return 7 + "px";
  }
};

export const DivWrapper = styled.div`
  height: 10vh;
  margin: 0;
  display: flex;
  background-color: aliceblue;
`;
export const HeaderLink = styled(Link)`
  color: black;
  font-size: ${({ sides }) => handleSize(sides)};
  text-align: ${({ sides }) => handleDisplay(sides)};
  font-weight: bolder;
  width: 50%;
  margin: 0 auto;
  font-family: "Bangers", cursive;
  display: flow-right;
  text-decoration: none;
  padding: ${({ sides }) => handlePadding(sides)};
`;
