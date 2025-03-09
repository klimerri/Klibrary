import "./Search.scss";

export const Search = () => {
    return (
        <form className="search__form">
            <label htmlFor="search" className="search__label">
                <input type="text" id="search" placeholder="Find your book" className="search__input"></input>
            </label>

            <input type="submit" className="search__submit" value="Search"></input>
        </form>
    )
}