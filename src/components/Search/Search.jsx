import { FormProvider, useForm } from "react-hook-form";
import { useBooksBySearch } from "../../hooks/books";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate();

    const methods = useForm({
            defaultValues: {
                search: '',
            }, 
            mode: ' qonSubmit'
        });

    const { register, handleSubmit, formState, getValues } = methods;

    const books = useBooksBySearch(getValues('search'));

    const onSubmit = handleSubmit((values) => {
        navigate(`/search-books/${values.search}`)
    });

    return (
        <FormProvider {...methods} className="search__form" handleSubmit={onSubmit}>
            <label htmlFor="search" className="search__label">
                <input {...register('search', {
                    required: 'Это поле обязательное'
                })} type="text" id="search" placeholder="Find your book" className="search__input"></input>

                {formState?.errors?.search?.message}
            </label>

            <input onClick={onSubmit} type="submit" className="search__submit" value="Search"></input>
        </FormProvider>
    )
}