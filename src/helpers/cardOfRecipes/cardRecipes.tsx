import {
  Item,
  Link,
  Photo,
  Title,
  Describe,
  Time,
  InfoCont,
  Difficulty,
  Cont,
  Owner,
  Category,
  Button,
  OwnerPhoto,
  Div,
  ImgWrapper,
  IconsBox,
} from './cardOfRecipes.styled';
import {
  GoClock,
  GoHeart,
  GoHeartFill,
  GoStar,
  GoStarFill,
} from 'react-icons/go';
import { BiDish } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { ICard } from '@/types';
import { DIFFICULTY_LEVEL } from '@/constants';
import { palette } from '@/constants/colors';
import { TbPencilMinus } from 'react-icons/tb';
import { HiOutlineTrash } from 'react-icons/hi2';

interface ICardRecipes {
  cards: ICard[];
}

function CardRecipes({ cards }: ICardRecipes) {
  const [recipes, setRecipes] = useState<ICard[]>([]);

  const handleFavorite = (id: number) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

  const renderStars = (difficulty: string) => {
    switch (difficulty) {
      case DIFFICULTY_LEVEL.easy:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
          </>
        );
      case DIFFICULTY_LEVEL.moderately:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
          </>
        );
      case DIFFICULTY_LEVEL.hard:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
          </>
        );
      default:
        return null;
    }
  };
  const currentRecipe = (id: number) =>
    recipes.find(recipe => recipe.id === id);

  useEffect(() => {
    if (cards.length) {
      setRecipes(cards);
    }
  }, [cards]);

  if (!cards.length) {
    return null;
  }

  return (
    <>
      {cards.map(
        ({
          id,
          photo,
          title,
          describe,
          timeOfCook,
          difficulty,
          owner,
          category,
          ownerPhoto,
        }) => (
          <Item key={id}>
            <ImgWrapper>
              <Link>
                <Photo src={`./cuisinePhoto/${photo}`} />
              </Link>
              <IconsBox>
                <TbPencilMinus
                  size={16}
                  style={{ cursor: 'pointer' }}
                  color={palette.mainWhite}
                />
                <HiOutlineTrash
                  size={16}
                  style={{ cursor: 'pointer' }}
                  color={palette.mainWhite}
                />
              </IconsBox>
            </ImgWrapper>
            <Title>{title}</Title>
            <Describe>{describe}</Describe>
            <InfoCont>
              <Cont>
                <GoClock size={20} />
                <Time>{timeOfCook}</Time>
              </Cont>

              <Cont>
                {renderStars(difficulty)}
                <Difficulty>{difficulty}</Difficulty>
              </Cont>

              <Button type="button" onClick={() => handleFavorite(id)}>
                {currentRecipe(id)?.favorite ? (
                  <GoHeartFill fill="#9C2B3F" size={24} />
                ) : (
                  <GoHeart fill="#9C2B3F" size={24} />
                )}
              </Button>
            </InfoCont>

            <InfoCont>
              <Div>
                <OwnerPhoto src={`./cuisinePhoto/${ownerPhoto}`} />
                <Owner>{owner}</Owner>
              </Div>
              <Div>
                <BiDish size={28} />
                <Category>{category}</Category>
              </Div>
            </InfoCont>
          </Item>
        )
      )}
    </>
  );
}
export default CardRecipes;
