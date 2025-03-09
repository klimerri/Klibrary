import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Header } from './components/Header/Header.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
