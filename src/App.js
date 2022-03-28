import { Button, Container } from 'react-bootstrap';
import './App.css';
import { SearchForm } from './components/form/SearchForm';
import { MovieList } from './components/movie-list/MovieList';
import { Title } from './components/title/Title';


const App =() => {
  const handleOnSubmit = e =>{
    e.preventDefault();
    console.log(e.value);
  }
  
  return (

    <div className='wrapper'>
      <Container>
        <Title />
        <SearchForm handleOnSubmit={handleOnSubmit}/>
        <hr />
        <MovieList/>
      </Container>
    </div>
  );
}

export default App;
