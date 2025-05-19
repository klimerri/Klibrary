import { useState } from "react";
import { BookCard } from "../../components/BookCard/BookCard";
import { useOneBookById, useSimilarBooks } from "../../hooks/books";
import "./RelatedAlice.scss";
import ReactModal from "react-modal";

const ALICE_BOOK_ID = 14571120;
const booksData = [
    {
        id: 1,
        title: "Book #1",
    },
    {
        id: 2,
        title: "Book #2",
    },
]

ReactModal.setAppElement('#root');

export const RelatedAlice = () => {
    const {data: books} = useSimilarBooks(ALICE_BOOK_ID);
    const [modalParam, setModalParam] = useState(null);

    return (
        <div className="related-alice__container">
            <h1 className="related-alice__header">Books similar to Alice in Wonderland</h1>

            <div className="related-alice__wrapper">
                {booksData?.map((book, index) => (
                    <BookCard 
                        id={book.id}
                        image={book.image}
                        name={book.title}
                        width="170"
                        isApiImage={true}
                        modalParam={modalParam}
                        setModalParam={setModalParam}
                    />
                ))}
            </div>
        </div>
    )
}

const OrderModal = ({modalParam, setModalParam}) => {
    const {data: book, isLoading} = useOneBookById(modalParam);

    if(!modalParam && isLoading) return null
    
    return (
        <ReactModal
        isOpen={!!modalParam}
        onRequestClose={() => setModalParam(null)}
        className={mmmodal}>
            <p>
                {book?.title}
            </p>
        </ReactModal>
    )
}