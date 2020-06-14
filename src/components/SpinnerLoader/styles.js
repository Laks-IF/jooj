import styled from "styled-components";

export const Loader = styled.div`
  width: 112px;
  height: 112px;

  transform: scale(0.5);

  .box1,
  .box2,
  .box3 {
    border: 16px solid var(--color);
    box-sizing: border-box;
    position: absolute;
    display: block;
  }

  .box1 {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
    animation: anime1 4s 0s forwards ease-in-out infinite;
  }

  .box2 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
    animation: anime2 4s 0s forwards ease-in-out infinite;
  }

  .box3 {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
    animation: anime3 4s 0s forwards ease-in-out infinite;
  }

  @-moz-keyframes anime1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @-webkit-keyframes anime1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @-o-keyframes anime1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @keyframes anime1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }

    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @-moz-keyframes anime2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }

  @-webkit-keyframes anime2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }

  @-o-keyframes anime2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }

  @keyframes anime2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }

  @-moz-keyframes anime3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }

  @-webkit-keyframes anime3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }

  @-o-keyframes anime3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }

  @keyframes anime3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    12.5% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }

    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }

    37.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    62.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    87.5% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }

    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }
`;
