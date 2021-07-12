import { useState } from "react";
import { NewsResult } from "./news_result";

export const News = () => {
  const [keyword, setKeyword] = useState("popular");
  const handleSearch = (e) => {
    const searchKeyword = document.getElementById("searchBar").value;
    setKeyword(searchKeyword);
  };
  return (
    <>
      <div class="container input-group mt-3">
        <input
          type="search"
          id="searchBar"
          class="form-control rounded"
          placeholder="Enter keyword here..."
        />
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
      <NewsResult keyword={keyword} />
    </>
  );
};
