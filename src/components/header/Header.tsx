import { Container, Wrapper } from './Header.styled';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import ProfileMenu from './ProfileMenu';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Menu />
        <ProfileMenu />
      </Container>
    </Wrapper>
  );
}

export default Header;
