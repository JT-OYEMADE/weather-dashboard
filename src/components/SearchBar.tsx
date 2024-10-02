import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  city: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent) => void;
  onToggleUnit: () => void;
  unit: string;
  onClearHistory: () => void;
  recentSearches: string[];
  onSelectRecentSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  city,
  onChange,
  onSearch,
  onToggleUnit,
  unit,
  onClearHistory,
  recentSearches,
  onSelectRecentSearch
}) => {
  return (
    <div className="col-lg-3 bg-light">
      <h5 className="md:text-xl text-gray font-medium">Search for a City:</h5>
      <div className="flex flex-row mb-3 gap-0">
        <input
          type="text"
          value={city}
          onChange={onChange}
          className="px-2 ring-0 border border-[#CDD0D5] py-2 text-sm w-full max-w-full rounded-s-md text-gray"
          placeholder="Enter a city"
          aria-label="Enter a city"
        />
        <button
          onClick={onSearch}
          className="flex flex-row items-center bg-primary py-2.5 px-3 -ml-3 text-white rounded-e-md"
          type="button"
        >
          <FaSearch />
        </button>
      </div>
      <div className="hidden md:block pb-6 xl:pb-0">
        <button
          className="bg-primary text-white w-full text-sm py-2.5 rounded-md"
          type="button"
          onClick={onToggleUnit}
        >
          Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
        </button>
        <button
          className="bg-primary text-white w-full text-sm py-2.5 rounded-md mt-2"
          type="button"
          onClick={onClearHistory}
        >
          Clear History
        </button>
      </div>

      <div className="mt-4 hidden lg:block">
        <h5 className="text-lg font-medium mb-2">Recent Searches:</h5>
        {recentSearches.length > 0 ? (
          <ul>
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className="cursor-pointer text-primary"
                onClick={() => onSelectRecentSearch(search)}
              >
                {search}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray">No recent searches</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
