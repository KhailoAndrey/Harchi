import {
  ExpertItem,
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
    <ExpertItem>
      <ExpertLink to={`/experts/${id}`}>
        <ExpertImg src={photo} />
        <ProfessionTitle>{profession}</ProfessionTitle>
        <InfoBlock>
          <RecipesAmount>Кіл. рецептів: {recipeAmount}</RecipesAmount>
          <RatingBlock>
            <FaRegFaceSmile size={24}></FaRegFaceSmile>
            <Rating>
              {rating} ({ratingAmount} оцінок)
            </Rating>
          </RatingBlock>
        </InfoBlock>
        <ExpertName>{name}</ExpertName>
      </ExpertLink>
    </ExpertItem>
  );
};

export default ExpertCard;
