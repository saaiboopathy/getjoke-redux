import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch Joke 
const fetchJoke = createAsyncThunk("jokes/fetchthejokecategory", async function (category) {
    return axios
        .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(function (result) {
            console.log(result.data.value)
            return result.data.value
        })
})

//Fetch Categories
const fetchCategory = createAsyncThunk("jokes/fetchthetotalcategory",async function (){
    return axios
    .get(`https://api.chucknorris.io/jokes/categories`)
    .then(function(data){
        return data.data
    })
})


const initialState = {
    joke: "No Joke",
    categories:[]
}

const jokeSlice = createSlice({
    name: "JOKE",
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build
        .addCase(fetchJoke.pending, function () {
            console.log("loading...")
        })
        .addCase(fetchJoke.fulfilled, (state, action) => {
            state.joke = action.payload
        })
        .addCase(fetchCategory.fulfilled, (state,action)=>{
            state.categories = action.payload
        })
    }
})

export default jokeSlice

export { fetchJoke,fetchCategory }