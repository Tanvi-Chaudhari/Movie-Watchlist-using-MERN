import "./App.css";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
import SubmissionForm from "./components/SubmissionForm";

function App() {
  const [cards, setCards] = useState([]);

  const addMovie = async (movie) => {
    console.log(movie);
    const addMovieToDatabase = await axios.post(
      "http://localhost:3010/addMovie",
      movie
    );

  };

  // Function to get movies
  const getMovies = async () => {
    const movies = await axios.get("http://localhost:3010/getMovies");
    setCards(movies.data);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div className="App">
      <SubmissionForm 
        addMovie={movie => addMovie(movie)}
      />
      <div className="wrapper">
        {cards.map((card) => {
          return <MovieCard {...card} />;
        })}
      </div>
    </div>
  );
}

export default App;
