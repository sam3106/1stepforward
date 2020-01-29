import styled from "styled-components";

const SpanProps = span => {
  switch (span) {
    case "Left":
      return "Left";
    case "Right":
      return "Right";
    case "Bottom":
      return "Bottom";

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

background-image: url(https://storage.needpix.com/rsynced_images/stairs-1689804_1280.jpg);
    width: 100%;
    height: 95vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
`;

export const DropDownInnerContent = styled.p`
    width: 50%;
    margin: 0 auto;
    font-size: 3.5vh;
    text-align: center;
    position: relative;
    top: 20vh;
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
