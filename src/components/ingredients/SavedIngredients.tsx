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
} from './SavedIngredients.styled';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import Share from '../share/Share';
import savedRecipes from '../../helpers/recipes/savedRecipes.json';

const SavedIngredients = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <Wrapper>
      <ul>
        {savedRecipes.map(recipe => (
          <RecipeItem key={recipe._id}>
            <HeaderBox>
              <RecipeTitleWrapper>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <GoArrowUpRight
                  strokeWidth={1}
                  size={20}
                  style={{ cursor: 'pointer' }}
                />
              </RecipeTitleWrapper>
              <IconsBlock>
                <CopyIcon>
                  <Icon>
                    <IoCopyOutline
                      size={24}
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
                      style={{ cursor: 'pointer' }}
                    />
                  </Icon>
                  <CopyMessage id="message" hidden>
                    Скопійовано!
                  </CopyMessage>
                </CopyIcon>
                <Icon>
                  <RiShareForwardLine size={24} onClick={changeVisibility} />
                </Icon>
                <Icon>
                  <HiOutlineTrash size={24} />
                </Icon>
              </IconsBlock>
            </HeaderBox>
            <IngridientsList>
              {recipe.ingridients.map(ingridient => (
                <IngridientItem key={ingridient._id}>
                  <p>{ingridient.product}</p>
                  <Inner>
                    <p>
                      {ingridient.quantity} {ingridient.measure}
                    </p>
                    <RxCross2 size={20} style={{ cursor: 'pointer' }} />
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
