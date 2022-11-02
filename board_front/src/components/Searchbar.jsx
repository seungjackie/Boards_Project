import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ search, onChange }) => {
  return (
    <div>
      <input type="text" value={search} onChange={onChange} />
    </div>
  );
};

export default Searchbar;
