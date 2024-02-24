import {
  ExpertLink,
  ExpertImg,
  ProfessionTitle,
  RecipesAmount,
  ExpertName,
  InfoBlock,
  RatingBlock,
  Rating,
} from './ExpertCard.styled';
import { FaRegFaceSmile } from "react-icons/fa6";
import { IExpert } from '../../../types/index';

type ExpertCardProps = {
  expert: IExpert;
};

const ExpertCard = ({
  expert: { id, photo, profession, recipeAmount, rating, ratingAmount, name },
}:ExpertCardProps) => {
  return (
    <li>
      <ExpertLink to={`/experts/${id}`}>
        <ExpertImg src={photo} />
        <ProfessionTitle>{profession}</ProfessionTitle>
        <InfoBlock>
          <RecipesAmount>Кіл. рецептів: {recipeAmount}</RecipesAmount>
          <RatingBlock>
            <FaRegFaceSmile size={24} />
            <Rating>
              {rating} ({ratingAmount} оцінок)
            </Rating>
          </RatingBlock>
        </InfoBlock>
        <ExpertName>{name}</ExpertName>
      </ExpertLink>
    </li>
  );
};

export default ExpertCard;
