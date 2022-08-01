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
                <span class="fa fa-toggle-left back-button" onClick={() => navigate("/")}/>
                <h1>{reviewData.name}</h1>
            </div>

            <div className="review-content"> 
                <InfoBox reviewData={reviewData}/>
                <img alt="Review" className="review-image" src={reviewData.images.main} />
                <img alt="Extra" className="review-image-extra" src={reviewData.images.extra}/>
                <div></div>
                <div className="content-body">
                    hiii{reviewData.content} 
                </div>
            </div>
        </div>
    );
};

export default Reviews;