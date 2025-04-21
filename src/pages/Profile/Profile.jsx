import { useAuthContext } from "../../context/AuthContext";
import userIcon from "../../images/icons/user.svg";
import "./Profile.scss";
import { auth } from "../../api/firebase";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { updateProfile } from 'firebase/auth';

export const Profile = () => {
    const cx = useAuthContext();

    const [isEdit, setEdit] = useState(false);
    const [username, setUsername] = useState(cx?.user?.displayName);

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = () => {
        updateProfile(cx.user, {displayName: username});
        setEdit(false);
    }

    return (
        <div className="profile__container">
            <span className="profile__header">Profile</span>

            <img className="profile__icon" src={userIcon}></img>

            <div className="profile__info">
            <div className="profile__item">
                    <span className="profile__subtitle">Your name</span>
                    <div className="profile__item__name">
                        {
                            isEdit 
                                ? <input type="text" value={username} onChange={handleChange}/> 
                                : <span className="profile__text">{username}</span>
                        }

                        {
                            isEdit 
                                ? <button className="profile__change-name" onClick={handleSubmit}>Submit</button> 
                                : <button className="profile__change-name" onClick={() => setEdit(true)}>Change name</button>
                        }
                    </div>
                </div>

                <div className="profile__item">
                    <span className="profile__subtitle">Your email</span>
                    <span className="profile__text">{cx?.user?.email}</span>
                </div>

                <div className="profile__item">
                    <span className="profile__subtitle">Your creation time</span>
                    <span className="profile__text">{cx?.user?.metadata?.creationTime}</span>
                </div>

                <div className="profile__item">
                    <span className="profile__subtitle">Your favorite genres</span>
                    <span className="profile__text"></span>
                </div>
            </div>

            <NavLink to="/" className="profile__sign-out" onClick={() => auth.signOut()}>Sign Out</NavLink>

            {/* <button onClick={() => writeUserData(cx.user.uid, '123', '12345', 20, 'none')}>Обновить</button> */}
        </div>
    )
}