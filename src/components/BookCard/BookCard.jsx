import { NavLink } from "react-router-dom";
import "./BookCard.scss";
import ReactModal from "react-modal";

export const BookCard = ({id, image, name, width, isApiImage = false, modalParam, setModalParam}) => {

    return (
        <>
            <NavLink to={id} className={`book-card__container ${isApiImage ? "custom-image" : ""}`} onClick={() => setModalParam(id)} style={{width: `${width}px`}}>
                <img src={image} className="book-card__image"></img>

                <span className="book-card__name">{name}</span>
            </NavLink>

            <ReactModal
                isOpen={modalParam && modalParam == id}
                onRequestClose={() => setModalParam(null)}
                style={{
                    content: {
                        width: '60vw',
                        height: '60vh',
                        margin: '0 auto',
                    }
                }}
            >
                <img width={`200px`} height={`300px`} src={image}></img> <br />

                {name}
            </ReactModal>
        </>
    )
}