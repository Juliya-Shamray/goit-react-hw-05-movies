import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLi = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  transition: color 250ms linear;
  &:hover {
    color: darkgoldenrod;
  }
`;
