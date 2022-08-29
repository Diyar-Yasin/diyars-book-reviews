import './index.scss';
import HotItem1 from './../../assets/BookCovers/HotRightNow/TheSecretLifeOfBees.jpg';
import HotItem2 from './../../assets/BookCovers/HotRightNow/Pygmalion.jpg';
import HotItem3 from './../../assets/BookCovers/HotRightNow/ChainsawMan.jpg';
import { useNavigate } from "react-router-dom";
import { Reviews } from "./../../data/reviews";

const HotNowSection = () => {
    const navigate = useNavigate();
    var hotReview1 = null;
    var hotReview2 = null;
    var hotReview3 = null;

    for (var k in Reviews) {
        if (Reviews[k].key === "-the-secret-life-of-bees") {
            hotReview1 = Reviews[k];
        } else if (Reviews[k].key === "-pygmalion") {
            hotReview2 = Reviews[k];
        } else if (Reviews[k].key === "-chainsaw-man") {
            hotReview3 = Reviews[k];
        }
    }

    if (hotReview1 === null || hotReview2 === null || hotReview3 === null) {
        console.log("CANT FIND A HOT REVIEW!");
    }

    return (
        <div className="hot-now-section">
            <div className="hot-now-title">Hot Right Now</div>
            <p>Here's what Diyar's up to recently</p>
            <div className="hot-now-items-container">
                <div className="hot-now-item" onClick={() =>  navigate("/bookreviewwebsite-v2/reviews" + hotReview1.key, { state: { id: 1, reviewData: hotReview1 }})}>
                    <div className="hot-now-item-content">
                        <img src={HotItem1} alt="HotItem1"/>
                    </div>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + hotReview2.key, { state: { id: 1, reviewData: hotReview2 }})}>
                    <div className="hot-now-item-content">
                        <img src={HotItem2} alt="HotItem2"/>
                    </div>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + hotReview3.key, { state: { id: 1, reviewData: hotReview3 }})}>
                    <div className="hot-now-item-content">
                        <img src={HotItem3} alt="HotItem3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotNowSection;