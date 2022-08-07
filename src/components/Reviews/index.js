import './index.scss';
import { useLocation, useNavigate } from 'react-router-dom'; 
import InfoBox from './../InfoBox';

const Reviews = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const reviewData = location.state.reviewData;

    return (
        <div className="review">
            <div className="heading">
                <span class="fa fa-toggle-left back-button" onClick={() => navigate("/bookreviewwebsite-v2")}/>
                <h1>{reviewData.name}</h1>
            </div>
            <div className="review-content"> 
                <div className="mobile-only-div">nice find!</div>
                <InfoBox reviewData={reviewData}/>
                <img alt="Review" className="review-image" src={reviewData.images.main} />
                <div></div>
                <div></div>
                <div className="content-body">
                    {reviewData.content} 
                </div>
            </div>
        </div>
    );
};

export default Reviews;