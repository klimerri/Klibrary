import "./Home.scss"
import Alice from "/src/images/related/Alice.png"
import { BookCard } from "../../components/BookCard/BookCard"
import { NavLink } from "react-router-dom"

const genres = [
    {
        id: 1,
        image: "/src/images/genres/All.svg",
        name: "All",
    },
    {
        id: 2,
        image: "/src/images/genres/Romantic.svg",
        name: "Romantic",
    },
    {
        id: 3,
        image: "/src/images/genres/Manga.svg",
        name: "Manga",
    },
    {
        id: 4,
        image: "/src/images/genres/Fiction.svg",
        name: "Fiction",
    },
    {
        id: 5,
        image: "/src/images/genres/Education.svg",
        name: "Education",
    },
    {
        id: 6,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Fantasy",
    },
    {
        id: 7,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Politics",
    },
    {
        id: 8,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Horror",
    },
    {
        id: 9,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Cook",
    },
    {
        id: 10,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Dictionary",
    },
    {
        id: 11,
        image: "/src/images/genres/Yellow-book.svg",
        name: "Memoir",
    },
];

export const Home = () => {
    return (
        <div className="home__container">
            <div className="home__genres">
                {genres.map(item => {
                    return (<BookCard 
                        image={item.image}
                        name={item.name}
                        width="90"
                    />
                    )
                })}
            </div>

            <div className="home__popular">
                <div className="home__popular__header">
                    <h1 className="home__popular__text">Popular</h1>

                    <button className="home__popular__button">View all</button>
                </div>
            </div>

            <div className="home__related">
                <img src={Alice} className="home__related__image"></img>

                <div className="home__related__info">
                    <h2 className="home__related__header">Curious Reads: Adventures Beyond Imagination</h2>

                    <p className="home__related__text">Step into a world of whimsy and wonder with our
                        collection of books inspired by the timeless charm of "Alice in Wonderland."
                        Perfect for those who love to explore the extraordinary!
                    </p>

                    <NavLink to="/related-alice" className="home__related__button">Related</NavLink>
                </div>

            </div>
        </div>
    )
}