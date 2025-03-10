import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RelatedAlice } from './pages/RelatedAlice/RelatedAlice.jsx'
import { Footer } from './components/Footer/Footer.jsx'

 const client = new QueryClient({
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
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/related-alice" element={<RelatedAlice />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
