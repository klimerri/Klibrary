import "./Footer.scss"

export const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__item">
                    <span className="footer__text">I used API:</span>

                    <a className="footer__link" href="https://bigbookapi.com/">BigBookAPI</a>
                </div>
                <div className="footer__item">
                    <span className="footer__text">Design was inspired by: </span>

                    <a className="footer__link" href="https://www.figma.com/design/yqKqsf9NcV4F7QVKnZsq8J/Unkai-bookstore-(Community)?node-id=0-1&t=TYVfFpkKaCi8Kjz9-1">Unkai</a>
                </div>
                <div className="footer__item">
                    <span className="footer__text">Coded by:</span>

                    <a className="footer__link" href="https://github.com/klimerri/Klibrary">klimerri</a>
                </div>
            </div>
        </footer>
    )
}
