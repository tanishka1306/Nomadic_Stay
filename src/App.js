import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Feedback from "./pages/feedback/Feedback";
import About from"./pages/about/About";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/about" element={<About/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
