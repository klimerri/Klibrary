import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RelatedAlice } from './pages/RelatedAlice/RelatedAlice.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { SearchBooks } from './pages/SearchBooks/SearchBooks.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { AuthContextProvider, useAuthContext } from "./context/AuthContext"
import { Profile } from './pages/Profile/Profile.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Loader } from "./shared/shared.jsx"

export const Router = () => {
    const { user, isLoading } = useAuthContext();

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {isLoading ? <Route path="*" element={<Loader/>}/> :
                    <>
                        <Route path="/" element={<Home />}/>
                        <Route path="/related-alice" element={<RelatedAlice />}/>
                        <Route path="/search-books/:search" element={<SearchBooks/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<h1>404</h1>}/>
                    </>
                }
                {user ? 
                <>
                    <Route path="/profile" element={<Profile/>}/>
                </> :
                <>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </>}
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}