import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: #aecfeb;
  font-weight: 700;
  transition: background-color 250ms linear;
  cursor: pointer;
  &:hover {
    background-color: #d4b3e5;
  }
`;
