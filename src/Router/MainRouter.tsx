import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../page/Home/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "../components/Header/Header"

export const MainRouter = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div className="main">
    <Header/>
    <Routes>
      <Route element={<Home/>} path="/"  />
      <Route element={<Navigate to={'/'} replace />} path="*"  />
    </Routes>
    </div>
    </BrowserRouter>
    </QueryClientProvider>
  )
}
