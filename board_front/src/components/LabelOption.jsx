import React from "react";

const LabelOption = ({ limit, setLimit }) => {
  return (
    <div>
      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit} // limit 제한
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
};

export default LabelOption;
