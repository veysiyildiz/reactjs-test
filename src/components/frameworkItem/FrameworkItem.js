import React from "react";
import StyledWrapper from "./FrameworkItemStyles";

const FrameworkItem = ({ item }) => {
  return (
    <StyledWrapper>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </StyledWrapper>
  );
};

export default FrameworkItem;
