import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../store/useStores";

const FrameworksPage = observer(() => {
  const { searchStore } = useStores();

  const search = searchStore.searchTerm;
  const res = searchStore.search(search);

  const handleClick = () => {
    console.log("term");
    searchStore.changeSearchTerm("ember");
  };

  console.log("search", res, search.toLowerCase());

  return (
    <div>
      <button onClick={handleClick}>Hello World</button>
      {res && res.length > 0 ? (
        res.map(item => (
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>no results found</p>
      )}
    </div>
  );
});

export default FrameworksPage;
