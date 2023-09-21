import { useState } from 'react';
import { StyledButton, StyledForm, StyledInput } from './Form.jstyled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return;
    }
    setSearchParams(query && { query });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
};

export default Form;
