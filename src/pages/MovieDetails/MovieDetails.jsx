import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import {
  StyledDivContent,
  StyledGenres,
  StyledLi,
  StyledLink,
  StyledList,
  StyledSubTitle,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMovieDetails(movieId);
        setMovie(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;

  return (
    <>
      {error && <h2>Something went wrong... Try again</h2>}
      <StyledLink to={goBackRef.current}>Go back</StyledLink>
      <StyledWrapper>
        <div>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
              width="250"
            />
          )}
        </div>

        <StyledDivContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>User score: {Math.round(vote_average * 10)}%</StyledText>
          <StyledSubTitle>Overview</StyledSubTitle>
          <p>{overview}</p>
          <StyledGenres>Genres</StyledGenres>
          <StyledList>
            {genres?.map(({ id, name }) => (
              <StyledLi key={id}>{name}</StyledLi>
            ))}
          </StyledList>
        </StyledDivContent>
      </StyledWrapper>
      <AdditionalInfo />
    </>
  );
};

export default MovieDetails;
