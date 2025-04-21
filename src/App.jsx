import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RelatedAlice } from './pages/RelatedAlice/RelatedAlice.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { SearchBooks } from './pages/SearchBooks/SearchBooks.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { AuthContextProvider } from "./context/AuthContext"
import { Profile } from './pages/Profile/Profile.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Router } from './router.jsx';
 
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <>
    <QueryClientProvider client={client}>
      <AuthContextProvider>
          <Router />
      </AuthContextProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
