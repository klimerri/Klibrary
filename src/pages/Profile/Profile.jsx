import { useAuthContext } from "../../context/AuthContext";
import userIcon from "../../images/icons/user.svg";
import "./Profile.scss";
import { auth } from "../../api/firebase";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { updateProfile } from 'firebase/auth';
import ReactModal from "react-modal";
import { FormProvider, useForm } from "react-hook-form";

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

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="profile__container">
            {cx && <ProfileModal {...{modalIsOpen, setModalIsOpen, cx}}></ProfileModal>}
            <span className="profile__header">Profile</span>

            <img className="profile__icon" src={userIcon}></img>

            <div className="profile__info">
            <div className="profile__item">
                    <span className="profile__subtitle">Your name</span>
                    <div className="profile__item__name">
                        {
                            isEdit 
                                ? <input className="profile__input" type="text" value={username} onChange={handleChange}/> 
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

const ProfileModal = ({modalIsOpen, setModalIsOpen, cx}) => {
    const methods = useForm
    ({
        defaultValues: {
            email: cx?.user?.email || '',
            name: cx?.user?.displayName || ''
        }
    })

    const buttonSubmit = methods.handleSubmit((value) => {
        console.log(value);
        updateProfile(cx.user, {displayName: username}).then(()=> user.currentUser.reload())
    })

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <FormProvider {...methods}>
                <form>
                    <span>{cx?.user?.email}</span>
                    <input>{cx?.user?.displayName}</input>
                    <button onClick={buttonSubmit}>Submit</button>
                </form>
            </FormProvider>
        </ReactModal>
    )
}