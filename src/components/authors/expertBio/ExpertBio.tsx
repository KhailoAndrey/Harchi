import { IExpert } from '@/types';
import {
  Bio,
  Description,
  ExpertImg,
  InfoBlock,
  Name,
  Rating,
  RatingBlock,
  RecipesAmount,
  Wrapper,
} from './ExpertBio.styled';
import { FaRegFaceSmile } from 'react-icons/fa6';

const expert: IExpert = {
  id: 1,
  email: 'myemail@gmail.com',
  photo: 'public/experts/photo2.png',
  profession: 'Кухар, телеведучий',
  recipeAmount: 50,
  rating: 4.9,
  ratingAmount: 123,
  name: 'Поліна Світлоока',
  description:
    'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
};

const ExpertBio = () => {
  return (
    <Wrapper>
      <ExpertImg src={expert.photo} />
      <Bio>
        <Name>{expert.name}</Name>
        <InfoBlock>
          <RecipesAmount>Кіл. рецептів: {expert.recipeAmount}</RecipesAmount>
          <RatingBlock>
            <FaRegFaceSmile size={24} />
            <Rating>
              {expert.rating} ({expert.ratingAmount} оцінок)
            </Rating>
          </RatingBlock>
        </InfoBlock>
        <Description>{expert.description}</Description>
      </Bio>
    </Wrapper>
  );
};

export default ExpertBio;
