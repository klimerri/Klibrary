import { news } from "../api"
import { Search } from "../components/Search/Search";
import "./Home.scss"
import { useAllNews } from "../hooks/news"
import { BookCard } from "../components/BookCard/BookCard";

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
    const {data: news, isFetching, } = useAllNews();

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
        </div>
    )
}