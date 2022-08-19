import { DetailedHTMLProps } from "react";
import SearchIcon from "../vectors/SearchIcon";
import "./SearchBox.scss";

const SearchBox = ({
  ...props
}: {} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <div className="search-box flex items-center">
      <SearchIcon />
      <input
        placeholder="Type here to search"
        className="flex-grow"
        {...props}
      />
    </div>
  );
};

export default SearchBox;
