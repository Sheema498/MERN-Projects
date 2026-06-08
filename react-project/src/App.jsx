import Student from "./Component/Student";
import Product from "./Component/Product";
import UseState from "./component/UseState";
import Demo from "./component/Demo";
import Counter from "./component/Counter";
import UseEffect from "./component/UseEffect";
import FocusInput from "./component/FocusInput";

//Provide data 
import { UserContext } from "./ContextAPI/UserContext";
import HomeConsume from "./ContextAPI/HomeConsume";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {
  increment,
  decrement
} from "./Redux/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(
    (state) => state.counter.value
  )
  const dispatch = useDispatch();

  const user = "Mubarak M";
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>

      <UserContext.Provider value={user} >
        <HomeConsume />
      </UserContext.Provider>


      <Student />
      <Product name="Laptop" price="50000" brand="HP" />
      <UseState />
      <Demo />
      <UseEffect />
      <Counter />
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