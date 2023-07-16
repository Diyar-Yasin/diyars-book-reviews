import './index.scss';
import { useNavigate } from "react-router-dom";
import { Reviews } from "./../../data/reviews";

const HotNowSection = () => {
    const navigate = useNavigate();
    var hotReview1 = Reviews[0];
    var hotReview2 = Reviews[1];
    var hotReview3 = Reviews[2];

    if (hotReview1 === null || hotReview2 === null || hotReview3 === null) {
        console.log("CANT FIND A HOT REVIEW!");
    }

    return (
        <div className="hot-now-section">
            <div className="hot-now-title">Hot Right Now</div>
            <div className="hot-now-subtitle">Here's what Diyar's up to recently</div>
            <div className="hot-now-items-container">
                <div className="hot-now-item" onClick={() =>  navigate("/bookreviewwebsite-v2/reviews" + hotReview1.key, { state: { id: 1, reviewData: hotReview1 }})}>
                    <p>{hotReview1.name}</p>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + hotReview2.key, { state: { id: 1, reviewData: hotReview2 }})}>
                    <p>{hotReview2.name}</p>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/bookreviewwebsite-v2/reviews" + hotReview3.key, { state: { id: 1, reviewData: hotReview3 }})}>
                    <p>{hotReview3.name}</p>
                </div>
            </div>
        </div>
    );
}

export default HotNowSection;
