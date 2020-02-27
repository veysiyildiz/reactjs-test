import React from "react";
import StyledWrapper from "./SearchBarStyles";

const SearchBar = ({ searchStore }) => {
  const onChangeSearchTerm = evt => {
    searchStore.searchTerm = evt.target.value;
  };
  return (
    <StyledWrapper>
      <input
        placeholder="find your favorite framework"
        value={searchStore.searchTerm}
        onChange={onChangeSearchTerm}
      />
    </StyledWrapper>
  );
};

export default SearchBar;
