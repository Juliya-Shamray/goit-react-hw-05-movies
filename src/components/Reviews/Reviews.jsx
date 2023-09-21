import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { StyledLi, StyledList, StyledText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await getReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 && !loading ? (
        <h2>Sorry... no reviews found yet</h2>
      ) : (
        <StyledList>
          {reviews.map(({ id, author, content }) => (
            <StyledLi key={id}>
              <h3>{author}</h3>
              <StyledText>{content}</StyledText>
            </StyledLi>
          ))}
        </StyledList>
      )}
      {error && <h2>Something went wrong... Try again</h2>}
    </>
  );
};

export default Reviews;
