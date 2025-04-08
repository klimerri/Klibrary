import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { auth } from "../../api/firebase";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.scss';
import { NavLink, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const validateScheme = yup.object().shape({
        email: yup.string().required('Поле обязательное').email('Email введен неверно'),
        password: yup.string().required('Поле обязательное').min(6, 'Минимум 6 символов'),
    }).required();

    const methods = useForm({
        defaultvalues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validateScheme)
    })

    const {register, handleSubmit, formState} = methods;

    const onSubmit = handleSubmit(async (values) => {
        const res = await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log(res.user.uid);
        
        alert('Logged in!');
        navigate('/profile');
    });

    return (
        <div className="login__form">
            <FormProvider {...methods}>
                <input className="login__input" {...register('email')} placeholder='Email'/>
                <span className="login__errors">
                    {formState?.errors?.email?.message}
                </span>

                <input className="login__input" {...register('password')} placeholder='Password' type='password'/>
                <span className="login__errors">
                    {formState?.errors?.password?.message}
                </span>

                <button className="login__button" onClick={onSubmit}>Login</button>
            </FormProvider>

            <div className='login__sign-block'>
                <span className='login__sign-text'>Did not have account?</span>

                <NavLink to="/sign-up" className="login__sign-link">Sign Up</NavLink>
            </div>
        </div>
    )
}