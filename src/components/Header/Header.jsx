import { Search } from "../Search/Search";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../api/firebase"
import { signOut } from 'firebase/auth'
import { useAuthContext } from "../../context/AuthContext";

export const Header = () => {
    const { user } = useAuthContext();

    return (
        <header>
            <div className="header__container">
                <span className="header__logo">Klibrary</span>

                {/* {user ? <>
                {user.email} 
                <button onClick={() => {}}>Logout</button>
                </> : <NavLink to="/sign-up" className="header__contacts">Sign Up</NavLink>} */}

                <Search />

                <div className="header__info">
                    <NavLink to="/" className="header__home">Home</NavLink>

                    <NavLink to="*" className="header__bestseller">Bestseller</NavLink>
                    
                    {user ? <NavLink to="/profile" className="header__sign-out">Profile</NavLink> : <NavLink to="/login" className="header__contacts">Log In</NavLink>}
                </div>
            </div>

        </header>
    )
}