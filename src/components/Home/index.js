import './index.scss';
import HotNowSection from './../HotNowSection';
import AboutMeSection from './../AboutMeSection';
import { Reviews } from "./../../data/reviews";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [searchResultsExist, setSearchResultsExist] = useState(false);

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
        <div className="main">
            <div className="header">
                <h1>DIYAR'S BOOK REVIEWS</h1>
            </div>
            
            <HotNowSection/>
            <AboutMeSection/>
            
            <div className="search">
                <div className="search-inner">
                    <input className={searchResultsExist ? "search-text-box-results" : "search-text-box-no-results"} value={userInput} placeholder="Search for books by title" onChange={e => (handleChange(e.target.value))}/>
                </div>
            </div>

            <div className="bookshelf-container">
                <div className="bookshelf">
                    {
                        userInput.length > 0 ?
                        getMatchedResults().map((item, i) => (    
                            <div className="book" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + item.key, { state: { id: 1, reviewData: item }})}>
                                <img className="book-cover" src={item.images.main} alt={item.name}/>
                            </div>
                        ))

                        :

                        Reviews.map((item, i) => (    
                            <div className="book" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + item.key, { state: { id: 1, reviewData: item }})}>
                                <img className="book-cover" src={item.images.main} alt={item.name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;