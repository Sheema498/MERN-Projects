
import Student from "./component/Student";
import Product from "./component/Product";
import Demo from "./component/Demo";
import Form from "./component/Form";
import UseEffect from "./component/UseEffect";
import Users from "./component/Users";
import FocusInput from "./component/FocusInput";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Providind data
import { UserContext } from "./ContextAPI/UserContext";
import HomeContext from "./ContextAPI/HomeContext";


// use Redux
import {
  increment,
  decrement
} from "./Redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
     const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();


  const user  = "Mubarak M";
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>



    <UserContext.Provider value={user}>
      <HomeContext />
    </UserContext.Provider>



      <Student />
      <Product name="Laptop" price="50000" brand="HP" />
      <Demo />
      <Form />
      <UseEffect />
      <Users />
      <FocusInput />

      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
}
export default App;
