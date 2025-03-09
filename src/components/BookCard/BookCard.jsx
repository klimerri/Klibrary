import { NavLink } from "react-router-dom";
import "./BookCard.scss";

export const BookCard = ({id, image, name, width, isApiImage = false}) => {
    return (
        <NavLink to={id} className={`book-card__container ${isApiImage ? "custom-image" : ""}`} style={{width: `${width}px`}}>
            <img src={image} className="book-card__image"></img>

            <span className="book-card__name">{name}</span>
        </NavLink>
    )
}