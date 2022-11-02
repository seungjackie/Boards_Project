import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [seatchstate, setSeatchstate] = useState();
  const navigate = useNavigate();

  const searchHandler = (event) => {
    let keyword = event.target.value;
    console.log("쿼리값은?? ", keyword);
    setSeatchstate(keyword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("엔터값은? ", seatchstate);
  };

  return (
    <div>
      <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          placeholder="검색을 하세요"
          onChange={(event) => searchHandler(event)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
