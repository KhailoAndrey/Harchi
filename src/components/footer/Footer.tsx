import { Container, Wrapper } from './Footer.styled';
import Logo from '../logo/Logo';
import Links from './links/Links';
import Subscribe from './subscribe/Subscribe';
import Socials from './socials/Socials';

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Links />
        <Subscribe />
        <Socials />
      </Container>
    </Wrapper>
  );
}

export default Footer;
