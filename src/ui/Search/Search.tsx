import React from "react";
import _ from "lodash";
import { withDisplayName } from "hoc";
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

Search.displayName = "Search";

export default withDisplayName(Search);
