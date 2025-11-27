import React, { useState } from "react";

function SearchBar({ onSearch }) {
    // storing the users input
    const [value, setValue] = useState("");
    return (
        <div className="search-container">
            {/* input box */}
            <input
                className="search-input"
                type="text"
                placeholder="Enter City"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {/* search button */}
            <button
                className="search-btn"
                onClick={() => {
                    if (value.trim() !== "") onSearch(value);
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
