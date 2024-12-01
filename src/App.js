import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./jokeslice";



function App() {

  const [category, setCategory] = useState()

  const joke = useSelector(function (state) {
    return state.joke.joke
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handlefetch = () => {
    dispatch(fetchJoke(category))
  }



  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handlefetch} >Get Joke</button>
      <h1>{joke}</h1>
    </div>
  );
}

export default App;
