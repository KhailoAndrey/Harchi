import { IconContext } from 'react-icons';
import { BiEnvelope } from 'react-icons/bi';

import { Container, Input, SubmitBtn, Text, TextBtn } from './Subscribe.styled';

function Subscribe() {
  return (
    <Container>
      <Text>Підписатись на новини</Text>
      <Input type="text" placeholder="Ввести e-mail"></Input>
      <SubmitBtn>
        <IconContext.Provider value={{ color: '#111110', size: '28' }}>
          <BiEnvelope />
        </IconContext.Provider>
        <TextBtn>Підписатись</TextBtn>
      </SubmitBtn>
    </Container>
  );
}

export default Subscribe;
