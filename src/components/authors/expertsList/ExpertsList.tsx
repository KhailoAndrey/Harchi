import { IExpert } from '../../../types/index';
import ExpertCard from '../expertCard/ExpertCard';
import {
  List,
  ListWrapper,
  LoadMoreIcon,
  SelectBlock
} from './ExpertsList.styled';
import Sorting from '@/helpers/sorting/Sorting';

const experts:IExpert[] = [
  {
    id: 1,
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 50,
    rating: 4.9,
    ratingAmount: 123,
    name: 'Поліна Світлоока',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 2,
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 43,
    rating: 4.9,
    ratingAmount: 98,
    name: 'Максим Загорський',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 3,
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 150,
    rating: 4.8,
    ratingAmount: 144,
    name: 'Юлія Мельник',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 4,
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 232,
    rating: 4.8,
    ratingAmount: 217,
    name: 'Анна Григоренко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 5,
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 25,
    rating: 4.7,
    ratingAmount: 23,
    name: 'Катерина Шевченко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 6,
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 78,
    rating: 4.7,
    ratingAmount: 94,
    name: 'Ольга Васильчук',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 7,
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 124,
    rating: 4.7,
    ratingAmount: 103,
    name: 'Наталія Петренко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 8,
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 34,
    rating: 4.7,
    ratingAmount: 23,
    name: 'Олександр Лисенко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 9,
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 84,
    rating: 4.7,
    ratingAmount: 77,
    name: 'Ігор Савченко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 10,
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 63,
    rating: 4.6,
    ratingAmount: 72,
    name: 'Андрій Ковальчук',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 11,
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 24,
    rating: 4.6,
    ratingAmount: 12,
    name: 'Ірина Коваленко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 12,
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 14,
    rating: 4.6,
    ratingAmount: 3,
    name: 'Вікторія Кравченко',
    description: 'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
];

const SelectingList:string[]= ["За рейтингом", "За кількістю рецептів", "За кількістю оцінок"]

const ExpertsList = () => {
  return (
    <>
      <ListWrapper>
        <SelectBlock>
          <Sorting list={SelectingList} />
        </SelectBlock>
        <List>
          {experts.map(expert => (
            <ExpertCard key={expert.id} expert={expert}></ExpertCard>
          ))}
        </List>
      </ListWrapper>
      <LoadMoreIcon>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7873 16.7878C11.4567 16.1183 12.5422 16.1183 13.2116 16.7878L23.9994 27.5756L34.7873 16.7878C35.4567 16.1183 36.5422 16.1183 37.2116 16.7878C37.8811 17.4573 37.8811 18.5427 37.2116 19.2122L25.5147 30.9091C24.6778 31.746 23.3211 31.746 22.4842 30.9091L10.7873 19.2122C10.1178 18.5427 10.1178 17.4573 10.7873 16.7878Z"
            fill="url(#paint0_linear_641_5849)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_641_5849"
              x1="24.9675"
              y1="21.3096"
              x2="26.8833"
              y2="32.2203"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.385" stop-color="#EA6500" />
              <stop offset="0.965" stop-color="#FFCE20" />
            </linearGradient>
          </defs>
        </svg>
      </LoadMoreIcon>
    </>
  );
};

export default ExpertsList;
