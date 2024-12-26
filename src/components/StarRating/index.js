import './index.scss';

const StarRating = ({ rating }) => {
    const MAX_STARS = 5;
    const STAR_PADDING = 25;

    // A partial star needs both a background star and a clipped filled star
    const createPartialStarElement = ( idx, percentageToFill ) => {
        return (
            <>
                <span class="fa fa-star star-background" style={{ left: `${idx * STAR_PADDING}px` }}/>
                <span 
                    class="fa fa-star star-filled"
                    style={{ 
                        left: `${idx * STAR_PADDING}px`,
                        clipPath: `inset(0% ${100 - percentageToFill}% 0% 0%)`,
                    }}
                /> 
            </>
        );
    }

    const stars = Array(MAX_STARS).fill(null);
    for (var i = 0; i < MAX_STARS; i++) {
        stars[i] = <span class="fa fa-star star-background" style={{ left: `${i * STAR_PADDING}px` }}/>;
    }

    const fullStars = Math.floor(rating)
    for (var i = 0; i < fullStars; i++) {
        stars[i] = <span 
            class="fa fa-star star-filled"
            style={{ 
                left: `${i * STAR_PADDING}px`,
                clipPath: `inset(0% 0% 0% 0%)`,
            }}
        />;
    }

    // Partial stars are only necessary for non-integer ratings
    if ( !Number.isInteger( rating ) ) {
        const partialStar = rating - fullStars
        stars[ fullStars ] = createPartialStarElement( fullStars, 100 * partialStar )
    }

    return (
        <div className="rating">
            { rating >= 0 ? stars.map((star, i) => {
                return ( star ) 
            }) : "no rating yet"} 
        </div>
    );
}

export default StarRating;

