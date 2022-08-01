import "./index.scss";
import React from "react";
import { useState } from "react";
import { Reviews } from "./../../data/reviews";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [searchResultsExist, setSearchResultsExist] = useState(false);

    const onSearch = (searchItem) => {
        setUserInput(searchItem.name);

        navigate("reviews" + searchItem.key, { state: { id: 1, reviewData: searchItem }});
    }

    const getMatchedResults = () => {
        return Reviews.filter((item) => {
            const searchTerm = userInput.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
                searchTerm &&
                fullName.includes(searchTerm)
        )});
    }

    const handleChange = (text) => {
        setUserInput(text);
        const matchedResults = Reviews.filter((item) => {
            const searchTerm = text.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
                searchTerm.length > 0 &&
                fullName.includes(searchTerm)
        )});

        if (matchedResults.length > 0) {
            setSearchResultsExist(true);
        } else {
            setSearchResultsExist(false);
        }
    }
    
    return (
        <div className="search">
            <div className="search-inner">
                <input className={searchResultsExist ? "search-text-box-results" : "search-text-box-no-results"} value={userInput} placeholder="Search for books by title" onChange={e => (handleChange(e.target.value))}/>
            </div>
            <div className="dropdown">
                {getMatchedResults()
                .slice(0, 10)
                .map((item, i, {length}) => (
                    <div
                        onClick={() => onSearch(item)}
                        className={length - 1 === i ? "final-dropdown-row" : "dropdown-row"}
                        key={item.key}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Searchbar;