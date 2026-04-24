import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
