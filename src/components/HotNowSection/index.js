import './index.scss';
import HotItem1 from './../../assets/BookCovers/HotRightNow/TokyoGhoulRe.jpg'
import HotItem2 from './../../assets/BookCovers/HotRightNow/CompleteCthulhuMythosTales.jpg';
import HotItem3 from './../../assets/BookCovers/HotRightNow/ChainsawMan.jpg';
import { useNavigate } from "react-router-dom";

const HotNowSection = () => {
    let navigate = useNavigate();

    return (
        <div className="hot-now-section">
            <div className="hot-now-title">Hot Right Now</div>
            <p>Here's what Diyar's up to recently</p>
            <div className="hot-now-items-container">
                <div className="hot-now-item" onClick={() => navigate("/reviews-tokyo-ghoul")}>
                    <div className="hot-now-item-content">
                        <img src={HotItem1} alt="HotItem1"/>
                    </div>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/reviews-complete-cthulhu-mythos-tales")}>
                    <div className="hot-now-item-content">
                        <img src={HotItem2} alt="HotItem2"/>
                    </div>
                </div>
                <div className="hot-now-item" onClick={() => navigate("/reviews-chainsaw-man")}>
                    <div className="hot-now-item-content">
                        <img src={HotItem3} alt="HotItem3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotNowSection;