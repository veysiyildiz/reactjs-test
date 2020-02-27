import React from "react";

import FrameworkItem from "../frameworkItem/FrameworkItem";
import StyledWrapper from "./FrameworksListStyles";

const FrameworksList = ({ searchResults }) => {
  return (
    <StyledWrapper>
      {searchResults.length > 0 ? (
        searchResults.map(item => (
          <FrameworkItem key={item.title} item={item} />
        ))
      ) : (
        <p>No results found!</p>
      )}
    </StyledWrapper>
  );
};

export default FrameworksList;
