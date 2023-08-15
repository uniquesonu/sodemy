import React from "react";
import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <>
      <Search className="-mr-12 z-10 ml-4"/>
      <input
        type="search"
        name="search"
        id="search"
        className="flex-1 p-3 rounded-full mx-auto pl-12 -ml-2 shadow"
        placeholder="Search for anything..."
      />
    </>
  );
};

export default SearchBar;
