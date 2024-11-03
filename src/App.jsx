
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Web1, Web2, Web3 } from "./pages";
import { Layout } from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Web1" element={<Web1/>}/>
          <Route path="/Web2" element={<Web2/>}/>
          <Route path="/Web3" element={<Web3/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
