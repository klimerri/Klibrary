import "./SearchBooks.scss";
import { useParams } from "react-router-dom";
import { useBooksBySearch } from "../../hooks/books";
import { BookCard } from "../../components/BookCard/BookCard";
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from "react";

export const SearchBooks = () => {
    const [modalParam, setModalParam] = useState(null);
    const {search} = useParams();
    const methods = useForm({
        defaultValues: {
            number: 10,
        }, 
        mode: 'onSubmit'
    });

    const { register, handleSubmit, formState, getValues } = methods;

    const {data, isLoading} = useBooksBySearch(search, getValues('number'));

    const onSubmit = handleSubmit((values) => {});

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="search-books__container">
            <FormProvider {...methods} className="" handleSubmit={onSubmit}>
                <label htmlFor="number" className="">
                    <input {...register('number')} type="number" id="number" placeholder="Number" className=""></input>
    
                    {formState?.errors?.search?.message}
                </label>
    
                <input onClick={onSubmit} type="submit" className="" value="Submit"></input>
            </FormProvider>

            <div className="search-books__wrapper">
                {data?.map(book => (
                    <BookCard
                        id={book[0].id}
                        image={book[0].image}
                        name={book[0].title}
                        width="170"
                        isApiImage={true}
                        modalParam={modalParam}
                        setModalParam={setModalParam}
                    />
                ))}
            </div>
        </div>
    )
}