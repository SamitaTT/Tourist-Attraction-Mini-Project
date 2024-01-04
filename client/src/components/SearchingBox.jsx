import { useState } from "react";

function SearchingSection() {
  const [search, setSearch] = useState("");
  return (
    <div className="search-section">
      <p>ค้นหาที่เที่ยว</p>
      <input
        type="text"
        className="inputSearch"
        placeholder="หาที่แล้วไปเที่ยวกัน ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchingSection;
