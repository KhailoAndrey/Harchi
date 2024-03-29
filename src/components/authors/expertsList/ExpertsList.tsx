import { IExpert } from '../../../types/index';
import ExpertCard from '../expertCard/ExpertCard';
import { List, LoadMoreIcon } from './ExpertsList.styled';
import LoadMore from '@/components/icons/LoadMoreIcon';

const experts: IExpert[] = [
  {
    id: 1,
    email: 'expert1@mail.com',
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 50,
    rating: 4.9,
    ratingAmount: 123,
    name: 'Поліна Світлоока',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 2,
    email: 'expert2@mail.com',
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 43,
    rating: 4.9,
    ratingAmount: 98,
    name: 'Максим Загорський',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 3,
    email: 'expert3@mail.com',
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 150,
    rating: 4.8,
    ratingAmount: 144,
    name: 'Юлія Мельник',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 4,
    email: 'expert4@mail.com',
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 232,
    rating: 4.8,
    ratingAmount: 217,
    name: 'Анна Григоренко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 5,
    email: 'expert5@mail.com',
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 25,
    rating: 4.7,
    ratingAmount: 23,
    name: 'Катерина Шевченко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 6,
    email: 'expert6@mail.com',
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 78,
    rating: 4.7,
    ratingAmount: 94,
    name: 'Ольга Васильчук',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 7,
    email: 'expert7@mail.com',
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 124,
    rating: 4.7,
    ratingAmount: 103,
    name: 'Наталія Петренко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 8,
    email: 'expert8@mail.com',
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 34,
    rating: 4.7,
    ratingAmount: 23,
    name: 'Олександр Лисенко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 9,
    email: 'expert9@mail.com',
    photo: 'public/experts/photo1.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 84,
    rating: 4.7,
    ratingAmount: 77,
    name: 'Ігор Савченко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 10,
    email: 'expert10@mail.com',
    photo: 'public/experts/photo2.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 63,
    rating: 4.6,
    ratingAmount: 72,
    name: 'Андрій Ковальчук',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 11,
    email: 'expert11@mail.com',
    photo: 'public/experts/photo3.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 24,
    rating: 4.6,
    ratingAmount: 12,
    name: 'Ірина Коваленко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
  {
    id: 12,
    email: 'expert12@mail.com',
    photo: 'public/experts/photo4.png',
    profession: 'Кухар, телеведучий',
    recipeAmount: 14,
    rating: 4.6,
    ratingAmount: 3,
    name: 'Вікторія Кравченко',
    description:
      'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
  },
];

const ExpertsList = () => {
  return (
    <>
      <List>
        {experts.map(expert => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </List>
      <LoadMoreIcon>
        <LoadMore />
      </LoadMoreIcon>
    </>
  );
};

export default ExpertsList;
