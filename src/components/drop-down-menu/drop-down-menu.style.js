import styled from "styled-components";

const SpanProps = span => {
  switch (span) {
    case "Left":
      return "Left";
      break;
    case "Right":
      return "Right";
      break;
    case "Bottom":
      return "Bottom";
      break;
    default:
      return null;
  }
};
const Span = styled.span`
  position: relative;
  animation-name: ${({ span }) => SpanProps(span)};
  animation-duration: 5s;
 
`;
export const DropDownWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  postion:relative
 
`;

export const DropDownInnerContent = styled.p`
  font-size: 26px;
`;
export const Left = styled(Span)`
  color: blue;
  @keyframes Left {
    from {

      left: 200vw;
      background-color: yellow;
    }
    to {
     
      left:0
      background-color: blue;
    }
  }
`;
export const Right = styled(Span)`
  color: red;
  @keyframes Right {
    from {
      top: 100vh;
      background-color: yellow;
    }
    to {
      top: 0vh;
    
    }
  }
`;
export const Bottom = styled(Span)`
  color: green;
  @keyframes Bottom {
    from {
      top: 100vh;
      background-color: yellow;
    }
    to {
      top: 0vh;
      background-color: blue;
    }
  }
`;
