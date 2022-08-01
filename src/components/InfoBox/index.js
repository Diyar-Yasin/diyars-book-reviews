import './index.scss';
import StarRating from './../StarRating';

const InfoBox = ({ reviewData }) => {
    return (
        <div className="info-box">
            Author: {reviewData.author} <br/>
            Genre: {reviewData.genres} <br/>
            <StarRating rating={reviewData.rating} />
        </div>
    );
}

export default InfoBox;