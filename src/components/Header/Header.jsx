import { Search } from "../Search/Search";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="header__container">
                <span className="header__logo">Klibrary</span>

                <Search />

                <div className="header__info">
                    <NavLink to="/" className="header__home">Home</NavLink>

                    <NavLink to="*" className="header__bestseller">Bestseller</NavLink>
                    
                    <NavLink to="*" className="header__contacts">Contacts</NavLink>
                </div>
            </div>

        </header>
    )
}