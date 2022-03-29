import { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helpers/axiosHelper";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [allMovie, setAllMovie] = useState([]);

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);
    setMovie(movie.data);
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };
    //adding first item or initial state
    !movieList.length && setMovieList([obj]) && setAllMovie([obj]);

    const isExist = allMovie.find((item) => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setAllMovie([...allMovie, obj]);
      setMovie({});
    } else {
      alert("Movie already in the list");
    }

    console.log(obj);
    console.log(movieList);
  };

  const handleOnDelete = (imdbID) => {
    const filteredList = allMovie.filter((itm) => itm.imdbID !== imdbID);
    setAllMovie(filteredList);
    setMovieList(filteredList);
   
  };

  // const handleOnDelete = i =>{
  //   const newArg = movieList.filter((item,index) => index !== i);
  //   setMovieList(newArg);
  // }

  const handleOnSelect = (cat) => {
  

    //happy selected
    //lazy selected
    //all selected
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />

        <div className="d-flex justify-content-center">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}
          {movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          )}
        </div>

        <hr />
        <MovieList
          movieList={movieList}
          handleOnDelete={handleOnDelete}
          handleOnSelect={handleOnSelect}
        />
      </Container>
    </div>
  );
};

export default App;
