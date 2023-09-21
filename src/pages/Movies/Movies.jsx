import Form from 'components/Form/Form';
import { StyledLi, StyledLink } from 'pages/Home/Home.styled';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const currentQuery = searchParams.get('query') || '';

  useEffect(() => {
    if (!currentQuery) return;
    const fetchSearch = async () => {
      try {
        const res = await getMovieByQuery(currentQuery);
        setMovies(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchSearch();
  }, [currentQuery]);

  return (
    <>
      {error && <h2>Something went wrong... Try again</h2>}
      <Form setSearchParams={setSearchParams} />
      <ol>
        {movies.length === 0 && currentQuery && (
          <h2>No movie with title "{currentQuery}" was found, try again</h2>
        )}
        {movies.length > 0 &&
          movies.map(movie => (
            <StyledLi key={movie.id}>
              <StyledLink
                state={{ from: location }}
                to={`/movies/${movie.id.toString()}`}
              >
                {movie.title}
              </StyledLink>
            </StyledLi>
          ))}
      </ol>
    </>
  );
};

export default Movies;
