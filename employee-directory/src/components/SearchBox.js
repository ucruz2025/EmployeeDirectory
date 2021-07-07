import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
    return (
        <div>
            <form>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    )
}

export default SearchBox;