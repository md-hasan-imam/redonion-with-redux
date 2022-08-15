import { Routes, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import SignIn from "./pages/Login/SignIn";
import Signup from "./pages/Login/Signup";


function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loading" element={<Loading />}></Route>
        </Routes>
    </div>
  );
}

export default App;
