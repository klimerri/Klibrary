import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { auth } from "../../api/firebase";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import './SignUp.scss';
import { Input } from '../../components/Input/Input';

export const SignUp = () => {
    const validateScheme = yup.object().shape({
        email: yup.string().required('Поле обязательное').email('Email введен неверно'),
        password: yup.string().required('Поле обязательное').min(6, 'Минимум 6 символов'),
    }).required();

    const methods = useForm({
        defaultvalues: {
            email: '',
            username: '',
            password: '',
        },
        resolver: yupResolver(validateScheme)
    })

    const {handleSubmit} = methods;

    const onSubmit = handleSubmit((values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password).then((credentials) => {
            updateProfile(credentials.user, {displayName: values.username})
        });
    });

    return (
        <div className="sign-up__form">
            <FormProvider {...methods}>
                <Input name="email" placeholder='Email' type="email"/>
                <Input name="username" placeholder='Username'/>
                <Input name="password" placeholder='Password' type="password"/>

                <button className="sign-up__button" onClick={onSubmit}>Sign Up</button>
            </FormProvider>
        </div>
    )
}