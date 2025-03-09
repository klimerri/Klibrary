import { BookCard } from "../../components/BookCard/BookCard";
import { useSimilarBooks } from "../../hooks/books";
import "./RelatedAlice.scss";

const ALICE_BOOK_ID = 14571120;

export const RelatedAlice = () => {
    const {data: books} = useSimilarBooks(ALICE_BOOK_ID);

    return (
        <div className="related-alice__container">
            <h1 className="related-alice__header">Books similar to Alice in Wonderland</h1>

            <div className="related-alice__wrapper">
                {books?.map(book => (
                    <BookCard 
                        image={book.image}
                        name={book.title}
                        width="170"
                        isApiImage={true}
                    />
                ))}
            </div>
        </div>
    )
}