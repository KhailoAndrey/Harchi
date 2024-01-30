import { IconContext } from 'react-icons';
import { BiEnvelope } from 'react-icons/bi';

import { Container, Input, SubmitBtn, Text, TextBtn } from './Subscribe.styled';
import { palette } from '@/constants/colors';

function Subscribe() {
  return (
    <Container>
      <Text>Підписатись на новини</Text>
      <Input type="text" placeholder="Ввести e-mail"></Input>
      <SubmitBtn>
        <IconContext.Provider value={{ color: palette.mainBlack, size: '28' }}>
          <BiEnvelope />
        </IconContext.Provider>
        <TextBtn>Підписатись</TextBtn>
      </SubmitBtn>
    </Container>
  );
}

export default Subscribe;
