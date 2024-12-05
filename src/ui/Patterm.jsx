import React from "react";
import styled from "styled-components";

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  .container {
    width: 100%;
    height: 100%;
    --color: #e1e1e1;
    background-color: #f3f3f3;
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      );
    background-size: 55px 55px;

    /* Add radial gradient fade effect */
    mask-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export default Pattern;
