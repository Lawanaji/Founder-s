import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/ladingPage/Home"
import CommingSoon from "./pages/ladingPage/CommingSoon"



function App() {


  return (
      <>
        <BrowserRouter>
              <Routes>
                      <Route path="/" element={<Layout><Home /></Layout>} />
                      <Route path="*" element={<Layout><CommingSoon/></Layout>} />


              </Routes>
        
        </BrowserRouter>
      </>
  )
}

export default App