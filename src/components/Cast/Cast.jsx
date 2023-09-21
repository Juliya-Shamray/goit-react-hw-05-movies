import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import {
  StyledLi,
  StyledList,
  StyledTitle,
  StyledWrapper,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await getCast(movieId);
        setCast(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, [movieId]);

  const imgNotFound = 'https://placekitten.com/g/200/300';

  return (
    <StyledList>
      {cast.length === 0 ? (
        <h2>Sorry... no cast found </h2>
      ) : (
        cast.map(({ id, profile_path, name, character }) => (
          <StyledLi key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
                alt={name}
                width="250"
              />
            ) : (
              <img
                src={'https://placekitten.com/g/200/300'}
                alt={name}
                onError={e => {
                  e.currentTarget.src = imgNotFound;
                }}
                width="250"
              />
            )}

            <StyledWrapper>
              <StyledTitle>{name}</StyledTitle>
              <p>Character:{character}</p>
            </StyledWrapper>
          </StyledLi>
        ))
      )}
      {error && <h2>Something went wrong... Try again</h2>}
    </StyledList>
  );
};

export default Cast;
