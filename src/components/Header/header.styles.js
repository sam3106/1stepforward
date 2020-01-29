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
const handlePadding = padding => {
  switch (padding) {
    case "Right":
      return .5 + "vh"+ " " + 0 ;
  }
};

export const DivWrapper = styled.div`
  padding: 2.5vh 0;
  margin: 0;
  display: flex;
  background-color: aliceblue;
`;
export const HeaderLink = styled(Link)`
  color: black;
  font-size: ${({ side }) => handleSize(side)};
  text-align: ${({ side }) => handleDisplay(side)};
  font-weight: bolder;
  width: 50%;
  margin: 0 auto;
  font-family: "Bangers", cursive;
  text-decoration: none;
  padding: ${({ side }) => handlePadding(side)};
`;
