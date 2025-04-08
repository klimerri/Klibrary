import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { auth } from "../../api/firebase";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.scss';

export const SignUp = () => {
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

    const onSubmit = handleSubmit((values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password);
    });

    return (
        <div className="sign-up__form">
            <FormProvider {...methods}>
                <input className='sign-up__input'{...register('email')} placeholder="Email"/>
                <span className="sign-up__errors">
                    {formState?.errors?.email?.message}
                </span>

                <input className='sign-up__input'{...register('password')} placeholder='Password' type='password'/>
                <span className="sign-up__errors">
                    {formState?.errors?.password?.message}
                </span>

                <button className="sign-up__button" onClick={onSubmit}>Sign Up</button>
            </FormProvider>
        </div>
    )
}