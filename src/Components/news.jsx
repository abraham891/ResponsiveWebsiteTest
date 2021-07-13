import { useState } from "react"
import { NewsResult } from "./news_result"
import '../css/news.css';

export const News = () => {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const handleSortClick = (e) => {
    if (!e.target.classList.contains("active")) {
      document.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      setSortBy(e.target.getAttribute("id"));
    }
  }

  const handleInputChange = (e) => {
    if (e.target.value.trim() === "") {
      document.querySelector("#searchBtn").setAttribute("disabled",true);
    } else {
      document.querySelector("#searchBtn").removeAttribute("disabled");
    }
  }

  const handleSearch = (e) => {
    const searchKeyword = document.getElementById("searchBar").value;
    document.getElementById("relevance").click();
    setKeyword(searchKeyword);
    document.querySelector(".sortContainer").classList.remove("d-none");
  }

  return (
    <>
      <div className="container input-group mt-3">
        <input type="search" id="searchBar" class="form-control rounded" placeholder="Enter keyword here..." onChange={handleInputChange} />
        <button type="button" id="searchBtn" class="btn btn-outline-primary" onClick={handleSearch}>search</button>

      </div>
      <div className="sortContainer container w-100 text-center mt-2 p-1 d-none">
        <div className="w-20 m-1 overflow-hidden d-inline-block">Sort By :</div>
        <div className="sortDiv active w-25 m-1 overflow-hidden border border-2 rounded-3 d-inline-block" onClick={handleSortClick} id="relevance">Relevance</div>
        <div className="sortDiv w-25 m-1 overflow-hidden border border-2 rounded-3 d-inline-block" onClick={handleSortClick} id="popularity">Popularity</div>
        <div className="sortDiv w-25 m-1 overflow-hidden border border-2 rounded-3 d-inline-block" onClick={handleSortClick} id="publishedAt">Published At</div>
      </div>
      <NewsResult sortBy={sortBy} keyword={keyword} />
    </>
  )
}