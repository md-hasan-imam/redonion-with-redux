import { Routes, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import SignIn from "./pages/Login/SignIn";
import Signup from "./pages/Login/Signup";
import Menu from "./pages/Menu";



function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menuitems" element={<Menu />}></Route>
          <Route path="/checkout/:id" element={<Checkout />}></Route>
        </Routes>
    </div>
  );
}

export default App;
