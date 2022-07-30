import React from "react";
import _ from "lodash";
import { Input } from "./Search.styles";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debouncedSearch = _.debounce(
      () => setSearchTerm(e.target.value),
      700
    );

    debouncedSearch();
  };

  return <Input onChange={handleChange} />;
};

export default Search;
