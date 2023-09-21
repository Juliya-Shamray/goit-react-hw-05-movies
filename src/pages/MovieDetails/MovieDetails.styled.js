import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 4px 4px 3px 0px #cbbebe;
  padding: 20px;
  background-color: azure;
  margin-bottom: 25px;
`;
export const StyledDivContent = styled.div`
  width: 70%;
`;
export const StyledTitle = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
`;
export const StyledText = styled.p`
  font-weight: 700;
  margin-bottom: 15px;
`;
export const StyledSubTitle = styled.h2`
  margin-bottom: 15px;
`;
export const StyledGenres = styled.h3`
  margin: 100px 0 15px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: auto;
`;
export const StyledLi = styled.li`
  list-style: none;
`;
export const StyledLink = styled(Link)`
  background-color: #e7f3ff;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 6px;
  color: black;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #dbe7f2;
  }
`;
