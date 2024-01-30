import RedirectButton from '@/helpers/buttons/RedirectButton';
import expertsArr from '../../../helpers/experts/experts.json';
import {
  Container,
  ExpertItem,
  ExpertList,
  ExpertName,
  ExpertPhoto,
  ExpertPortfolio,
  ExpertProf,
  Title,
} from './Experts.styled';
import { gradient, palette } from '@/constants/colors';

function Experts() {
  const expList = expertsArr.map(({ id, photo, profession, name }) => (
    <ExpertItem key={id}>
      <ExpertPortfolio>
        <ExpertPhoto src={`./experts/${photo}`} alt={`cook's photo ${name}`} />
        <ExpertProf>{profession}</ExpertProf>
      </ExpertPortfolio>
      <ExpertName>{name}</ExpertName>
    </ExpertItem>
  ));
  return (
    <Container>
      <Title>Експерти</Title>
      <ExpertList>{expList}</ExpertList>
      <div className="redirbtn">
        <RedirectButton
          text={'Дивитися більше'}
          backgroundcolor={gradient.red2}
          textcolor={palette.mainWhite}
        ></RedirectButton>
      </div>
    </Container>
  );
}

export default Experts;
