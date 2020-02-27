import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../store/useStores";

import FrameworksList from "../components/frameworksList/FrameworksList";
import SearchBar from "../components/searchBar/SearchBar";

const FrameworksPage = observer(() => {
  let { searchStore } = useStores();

  return (
    <div className="container">
      <SearchBar searchStore={searchStore} />
      {searchStore.searchResults && (
        <FrameworksList searchResults={searchStore.searchResults} />
      )}
    </div>
  );
});

export default FrameworksPage;
