import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledList, StyledTitle } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <div>
      <StyledTitle>Additional information</StyledTitle>
      <StyledList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </StyledList>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AdditionalInfo;
