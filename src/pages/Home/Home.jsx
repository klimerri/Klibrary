import "./Home.scss"
import All from "/src/images/genres/All.svg"
import Romantic from "/src/images/genres/Romantic.svg"
import Manga from "/src/images/genres/Manga.svg"
import Alice from "/src/images/related/Alice.png"
import Fiction from "/src/images/genres/Fiction.svg"
import Education from "/src/images/genres/Education.svg"
import YellowBook from "/src/images/genres/Yellow-book.svg"
import { BookCard } from "../../components/BookCard/BookCard"
import { NavLink } from "react-router-dom"
import { FormProvider } from "react-hook-form"
import { useForm } from "react-hook-form"
import { useAuthContext } from '../../context/AuthContext'
import {useEffect } from 'react'
import { usePopularBooks } from "../../hooks/books"
import { useState } from "react"

const genres = [
    {
        id: 1,
        image: All,
        name: "All",
    },
    {
        id: 2,
        image: Romantic,
        name: "Romantic",
    },
    {
        id: 3,
        image: Manga,
        name: "Manga",
    },
    {
        id: 4,
        image: Fiction,
        name: "Fiction",
    },
    {
        id: 5,
        image: Education,
        name: "Education",
    },
    {
        id: 6,
        image: YellowBook,
        name: "Fantasy",
    },
    {
        id: 7,
        image: YellowBook,
        name: "Politics",
    },
    {
        id: 8,
        image: YellowBook,
        name: "Horror",
    },
    {
        id: 9,
        image: YellowBook,
        name: "Cook",
    },
    {
        id: 10,
        image: YellowBook,
        name: "Dictionary",
    },
    {
        id: 11,
        image: YellowBook,
        name: "Memoir",
    },
];

export const Home = () => {
    const {data: books} = usePopularBooks(15);

    console.log(books)

    const [question, setQuestion] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
    if (!question.trim()) {
        setStatus("Введите вопрос");
        return;
    }

    try {
        const res = await fetch("http://localhost:8000/api/v1/lead", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "X-API-Key": import.meta.env.VITE_API_TOKEN, 
            },
            body: JSON.stringify({
                phone: phone,
                email: email,
                message: question,
                custom_fields_schema: {
                    clientName: name
                }
            })
        });

        console.log(import.meta.env.VITE_API_TOKEN);

        if (res.ok) {
            setStatus("Ваш вопрос отправлен!");
            setQuestion("");
            setName("");
            setPhone("");
            setEmail("");
        } else {
            setStatus("Ошибка при отправке.");
        }
    } catch (err) {
        console.error(err);
        setStatus("Сетевая ошибка.");
    }
};

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

                <div className="home__popular-wrapper">
                    {books?.map(book => (
                        <BookCard 
                            image={book[0].image}
                            name={book[0].title}
                            width="90"
                            isApiImage={true}
                        />
                    ))}
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