import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-weight: 700;
  color: grey;
  transition: color 250ms linear;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: lightblue;
    bottom: -5px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before,
  &:hover {
    transform-origin: left;
    transform: scaleX(1);
    color: lightblue;
  }

  &.active {
    color: lightblue;
  }
`;
export const StyledHeader = styled.header`
  padding: 30px 50px;
  background-color: #849da7;
`;
