import './index.scss';
import { useNavigate } from 'react-router-dom';

const AboutMeSection = () => {
    let navigate = useNavigate();

    return (
        <div className="about-me">
            <a className="about-me-button" target="_blank" href="https://diyar-yasin.github.io/">
                Diyar who?
            </a>
        </div>
    );
}

export default AboutMeSection;