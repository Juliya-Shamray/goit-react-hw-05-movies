import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledTitle = styled.h2`
  font-style: italic;
  margin-bottom: 15px;
`;
export const StyledList = styled.ul`
  list-style: none;
  font-weight: 700;
  font-size: large;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: azure;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: white;
    background-color: grey;
  }
  &.active {
    color: white;
    background-color: grey;
  }
`;
