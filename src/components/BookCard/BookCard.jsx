import { NavLink } from "react-router-dom";
import "./BookCard.scss";

export const BookCard = ({id, image, name, width}) => {
    return (
        <NavLink to={id} className="book-card__container">
            <img src={image} className="book-card__image" style={{width: `${width}px`}}></img>

            <span className="book-card__name">{name}</span>
        </NavLink>
    )
}