import React from "react";
import { Input } from "./Search.styles";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return <Input value={searchTerm} onChange={handleChange} />;
};

export default Search;
