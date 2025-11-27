import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Enter City"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
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
