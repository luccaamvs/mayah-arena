import './styles.css';
import albertImage from '../../images/character_profile/albertImage.png';

export function Character() {
    return (
        <img src={albertImage} alt="Albert" className="character" />
    )
}