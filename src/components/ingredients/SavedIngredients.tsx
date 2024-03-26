import { GoArrowUpRight } from 'react-icons/go';
import { IoCopyOutline } from 'react-icons/io5';
import { RiShareForwardLine } from 'react-icons/ri';
import { HiOutlineTrash } from 'react-icons/hi2';
import {
  Wrapper,
  RecipeItem,
  HeaderBox,
  RecipeTitleWrapper,
  RecipeTitle,
  IconsBlock,
  IngridientsList,
  IngridientItem,
  Inner,
  CopyIcon,
  Icon,
  CopyMessage,
  CrossIcon,
} from './SavedIngredients.styled';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Share from '../share/Share';
import savedRecipes from '../../helpers/recipes/savedRecipes.json';

const SavedIngredients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChangedSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const copyToClipboard = (ingredientText: string) => {
    navigator.clipboard
      .writeText(ingredientText)
      .then(() => {
        const message: HTMLElement | null = document.getElementById('message');
        if (message !== null) {
          message.removeAttribute('hidden');
          setTimeout(() => {
            message.setAttribute('hidden', 'true');
          }, 500);
        }
      })
      .catch(error => {
        console.error('Не вдалося скопіювати текст: ', error);
      });
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangedSize);
    return () => {
      window.removeEventListener('resize', handleChangedSize);
    };
  }, []);

  return (
    <Wrapper>
      <ul>
        {savedRecipes.map(recipe => (
          <RecipeItem key={recipe._id}>
            <HeaderBox>
              {windowWidth >= 768 && (
                <RecipeTitleWrapper>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <GoArrowUpRight
                    strokeWidth={1}
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </RecipeTitleWrapper>
              )}
              <IconsBlock>
                <CopyIcon>
                  <Icon>
                    <IoCopyOutline
                      onClick={() =>
                        copyToClipboard(
                          recipe.ingridients
                            .map(
                              ingridient =>
                                `${ingridient.product}: ${ingridient.quantity} ${ingridient.measure}`
                            )
                            .join('\n')
                        )
                      }
                      size={24}
                      style={{ cursor: 'pointer' }}
                    />
                  </Icon>
                  <CopyMessage id="message" hidden>
                    Скопійовано!
                  </CopyMessage>
                </CopyIcon>
                <Icon>
                  <RiShareForwardLine onClick={changeVisibility} size={24}/>
                </Icon>
                <Icon>
                  <HiOutlineTrash size={24}/>
                </Icon>
              </IconsBlock>
            </HeaderBox>
            {windowWidth < 768 && (
              <RecipeTitleWrapper>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <GoArrowUpRight
                  strokeWidth={1}
                  size={20}
                  style={{ cursor: 'pointer' }}
                />
              </RecipeTitleWrapper>
            )}
            <IngridientsList>
              {recipe.ingridients.map(ingridient => (
                <IngridientItem key={ingridient._id}>
                  <p>{ingridient.product}</p>
                  <Inner>
                    <p>
                      {ingridient.quantity} {ingridient.measure}
                    </p>
                    <CrossIcon>
                      <RxCross2 style={{ cursor: 'pointer' }} />
                      </CrossIcon>
                  </Inner>
                </IngridientItem>
              ))}
            </IngridientsList>
            {isVisible && (
              <Share
                changeVisibility={changeVisibility}
                isVisible={isVisible}
                ingridients={recipe.ingridients}
              />
            )}
          </RecipeItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SavedIngredients;
