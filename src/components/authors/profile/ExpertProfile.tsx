import { IExpert } from '@/types';
import {
    Wrapper,
    ImgWrapper,
  ExpertImg,
  Bio,
    InfoWrapper,
  IconWrapper,
  Block,
  Name,
  Email,
  RatingBlock,
  Rating,
  DescriptionBlock,
  Description,
} from './ExpertProfile.styled';
import { MdAddAPhoto } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { palette } from '@/constants/colors';

const expert: IExpert = {
  id: 1,
  email: 'myemail@gmail.com',
  photo: 'public/experts/photo1.png',
  profession: 'Кухар, телеведучий',
  recipeAmount: 50,
  rating: 4.9,
  ratingAmount: 123,
  name: 'Поліна Світлоока',
  description:
    'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
};

const ExpertProfile = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <ExpertImg src={expert.photo} />
        <IconWrapper>
            <MdAddAPhoto size={17} fill={palette.mainWhite} />
        </IconWrapper>
      </ImgWrapper>
      <Bio>
        <InfoWrapper>
          <Block>
            <Name>{expert.name}</Name>
            <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
          </Block>
          <Block>
            <Email>{expert.email}</Email>
            <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
          </Block>
        </InfoWrapper>
        <RatingBlock>
          <FaRegFaceSmile size={24} style={{ cursor: 'pointer' }} />
          <Rating>
            {expert.rating} ({expert.ratingAmount} оцінок)
          </Rating>
        </RatingBlock>
        <DescriptionBlock>
          <Description>{expert.description}</Description>
          <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
        </DescriptionBlock>
      </Bio>
    </Wrapper>
  );
};

export default ExpertProfile;
