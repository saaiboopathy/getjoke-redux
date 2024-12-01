import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchJoke,fetchCategory } from "./jokeslice";



function App() {

  const [category, setCategory] = useState()
  const [error, seterror] = useState(false)


  const categories = useSelector(function (state) {
    return state.joke.categories
  })

  const joke = useSelector(function (state) {
    return state.joke.joke
  })

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCategory())
  },[dispatch])

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handlefetch = () => {
    if(!categories.includes(category)){
      seterror(true)
    }
    else{
      seterror(false)
      dispatch(fetchJoke(category))
    }
  }



  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handlefetch} >{category ? `Get ${category}` : "Get Joke"} </button>
      {
        error && (
          <div>
            <p>Invalid Category. Choose from the below :</p>
            <ul>
              {
                categories.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>
        )
      }




      <h1>{joke}</h1>
    </div>
  );
}

export default App;
