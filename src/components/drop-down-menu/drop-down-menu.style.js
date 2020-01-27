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
  display: inline-block;
  animation-name: ${({ span }) => SpanProps(span)};
  animation-duration: 5s;
`;
export const DropDownWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  margin-top:25vh;
`;

export const DropDownInnerContent = styled.p`

  width: 50%;
  margin: 0 auto;
  font-size: 2.5vh;
  text-align: center;
  
`;
export const Left = styled(Span)`
  color: blue;
  @keyframes Left {
    from {
      left: 110vw;
    }
    to {
      left: 0;
    }
  }
`;
export const Right = styled(Span)`
  color: red;
  @keyframes Right {
    from {
      right: 100vw;
    }
    to {
      right: 0;
    }
  }
`;
export const Bottom = styled(Span)`
  color: green;
  @keyframes Bottom {
    from {
      top: 100vh;
    }
    to {
      top: 0;
    }
  }
`;
