import { StyledHeader, StyledLink, StyledList } from './Header.styled';

const Header = () => {
  const navArr = [
    {
      src: '/',
      title: 'Home',
    },
    {
      src: '/movies',
      title: 'Movies',
    },
  ];
  return (
    <StyledHeader>
      <nav>
        <StyledList>
          {navArr.map(({ src, title }) => (
            <li key={src}>
              <StyledLink to={src}>{title}</StyledLink>
            </li>
          ))}
        </StyledList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
