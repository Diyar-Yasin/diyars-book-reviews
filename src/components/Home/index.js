import './index.scss';
import HotNowSection from './../HotNowSection';
import AboutMeSection from './../AboutMeSection';
import { Reviews } from "./../../data/reviews";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [searchResultsExist, setSearchResultsExist] = useState(false);
    const [divsNeededToPadBookshelf, setDivsNeededToPadBookshelf] = useState( window.innerWidth <= 768 ? 3 : 6 );
    
    useEffect( () => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setDivsNeededToPadBookshelf( window.innerWidth <= 768 ? 3 : 6 );
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                            <div lassName="book" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + item.key, { state: { id: 1, reviewData: item }})}>
                                <img className="book-cover" src={item.images.main} alt={item.name}/>
                            </div>
                        ))

                        :

                        Reviews.map((item, i) => (  
                            <div className={item.content.length > 0 ? "book" : "book unreviewed-book"} onClick={() => navigate("/bookreviewwebsite-v2/reviews" + item.key, { state: { id: 1, reviewData: item }})}>
                                <img className="book-cover" src={item.images.main} alt={item.name}/>
                            </div>
                        ))
                    }
                    {[...Array( divsNeededToPadBookshelf )].map((_, key) => ( <div className="forced-book-padding"/> ))}
                </div>
            </div>
            <div className="bookshelf-footer"></div>
            
        </div>
    );
};

export default Home;