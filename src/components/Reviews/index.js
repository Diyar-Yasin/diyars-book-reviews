import './index.scss';
import { useLocation } from 'react-router-dom'; 
import InfoBox from './../InfoBox';

const Reviews = () => {
    const location = useLocation();
    const reviewData = location.state.reviewData;

    return (
        <div className="review">
            <div className="heading">
                <h1>{reviewData.name}</h1>
            </div>
            <div className="review-content"> 
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
