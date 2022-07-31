import './index.scss';
import HotNowSection from './../HotNowSection';
import AboutMeSection from './../AboutMeSection';
import Searchbar from './../Searchbar';
import { Reviews } from "./../../data/reviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="header">
                <h1>DIYAR'S BOOK REVIEWS</h1>
            </div>
            
            <HotNowSection/>
            <AboutMeSection/>
            <Searchbar/>

            <div className="bookshelf-container">
                <div className="bookshelf">
                    {
                        Reviews.map((item, i) => (    
                            <div className="book" onClick={() => navigate("reviews" + item.key, { state: { id: 1, reviewData: item }})}>
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