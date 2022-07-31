import './index.scss';
import { useLocation } from 'react-router-dom'; 

const Reviews = () => {
    const location = useLocation();
    const reviewData = location.state.reviewData;

    return (
        <div>
            <p>This is {reviewData.name}</p>
        </div>
    );
};

export default Reviews;