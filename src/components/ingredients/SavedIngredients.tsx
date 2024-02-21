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
} from './SavedIngredients.styled';
import { RxCross2 } from 'react-icons/rx';

const savedRecipes = [
  {
    title: 'Тірамісу — класичний рецепт',
    description: 'Ніжний італійський десерт',
    mainPhotoURL:
      'https://res.cloudinary.com/ddxwmrbxq/image/upload/v1706477275/harchi/mnxo3m2hgfv5efwpjfkk.jpg',
    category: 'Десерт',
    cuisine: 'Італійська',
    difficulty: 'Легко',
    cookTime: '1 год',
    portions: 5,
    ingridients: [
      {
        categoryIngr: '',
        product: 'Сир маскарпоне',
        quantity: 250,
        measure: 'грам',
        _id: '123m',
      },
      {
        categoryIngr: '',
        product: 'Вершки (33%)',
        quantity: 250,
        measure: 'мл',
        _id: '564f',
      },
      {
        categoryIngr: '',
        product: 'Печиво Савоярді',
        quantity: 20,
        measure: 'шт',
        _id: '656y',
      },
      {
        categoryIngr: '',
        product: 'Цукрова пудра',
        quantity: 120,
        measure: 'грам',
        _id: '946n',
      },
      {
        categoryIngr: '',
        product: 'Мигдальний лікер “Амаретто”',
        quantity: 3,
        measure: 'с.л.',
        _id: '574a',
      },
      {
        categoryIngr: '',
        product: 'Кава еспресо',
        quantity: 200,
        measure: 'мл',
        _id: '754h',
      },
    ],
    favorite: false,
    owner: '65a2d2fa4b26b90c3078f170',
    _id: '65b6c6e3e4ddd94fb81624a8',
    createdAt: '2024-01-28T21:28:03.453Z',
    updatedAt: '2024-01-28T21:28:03.453Z',
    },
];

const SavedIngredients = () => {
  return (
    <Wrapper>
      <ul>
        {savedRecipes.map(recipe => (
          <RecipeItem key={recipe._id}>
            <HeaderBox>
              <RecipeTitleWrapper>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <GoArrowUpRight strokeWidth={1} size={20} style={{ cursor: 'pointer' }}/>
              </RecipeTitleWrapper>
              <IconsBlock>
                <IoCopyOutline size={24} style={{ cursor: 'pointer' }} />
                <RiShareForwardLine size={24} style={{ cursor: 'pointer' }} />
                <HiOutlineTrash size={24} style={{ cursor: 'pointer' }} />
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
                    <RxCross2 size={20} style={{ cursor: 'pointer' }}/>
                  </Inner>
                </IngridientItem>
              ))}
            </IngridientsList>
          </RecipeItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SavedIngredients;
