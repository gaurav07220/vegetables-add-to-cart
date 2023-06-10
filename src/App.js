import Vegetable from "./components/Vegetables/Vegetable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router basename="">  
        <Navbar />
        <Routes>
          <Route path="/" element={<Vegetable />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
