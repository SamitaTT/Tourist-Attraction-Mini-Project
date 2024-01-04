import { useState } from "react";

function SearchingSection() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col">
      <p className="font-Kanit ml-[270px] p-3">ค้นหาที่เที่ยว</p>
      <input
        type="text"
        className="font-Kanit text-center mb-5 p-1.5 border-b-2 w-[950px] ml-auto mr-auto focus:outline-none"
        placeholder="หาที่แล้วไปเที่ยวกัน ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchingSection;
