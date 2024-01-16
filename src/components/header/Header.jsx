import { Container, Wrapper } from './Header.styled';
import Logo from '../logo/Logo';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
    </Wrapper>
  );
}

export default Header;
