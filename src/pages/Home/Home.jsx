import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';
import { StyledLi, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getTrendingMovies();
        setMovies(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <ol>
      {error && <h2>Something went wrong... Try again</h2>}
      {movies.map(({ id, title }) => (
        <StyledLi key={id}>
          <StyledLink state={{ from: location }} to={`movies/${id.toString()}`}>
            {title}
          </StyledLink>
        </StyledLi>
      ))}
    </ol>
  );
};

export default Home;
