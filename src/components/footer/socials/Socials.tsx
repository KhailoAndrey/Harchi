import { IconContext } from 'react-icons';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { SiGmail, SiYoutube } from 'react-icons/si';

import { Container, SocIcons, SocItem, TextSoc } from './Socials.styled';

function Socials() {
  return (
    <Container>
      <TextSoc>Ми в соціальних мережах</TextSoc>
      <SocIcons>
        <IconContext.Provider value={{ color: '#fff', size: '24' }}>
          <a href="https://facebook.com" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://youtube.com" target="_blank">
            <SocItem>
              <SiYoutube color="#000" size={16} />
            </SocItem>
          </a>
          <a href="https://web.telegram.org/" target="_blank">
            <BsTelegram />
          </a>
          <a href="https://gmail.com" target="_blank">
            <SiGmail />
          </a>
        </IconContext.Provider>
      </SocIcons>
    </Container>
  );
}

export default Socials;
