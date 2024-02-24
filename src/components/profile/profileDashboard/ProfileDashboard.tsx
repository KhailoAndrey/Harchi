import { HiOutlineLockOpen } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi2';
import { TbLogout } from 'react-icons/tb';
import { LuUserX } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';
import {
  ProfileInformation,
  ListTitle,
  SettingsItem,
  StatisticsItem,
  ListItem,
} from './ProfileDashboard.styled';
import { IExpert } from '@/types';

type ProfileDashboardProps = {
  expert: IExpert;
};

const ProfileDashboard = ({ expert }: ProfileDashboardProps) => {
  return (
    <ProfileInformation>
      <div>
        <ListTitle>Налаштування</ListTitle>
        <ul>
          <SettingsItem>
            <HiOutlineLockOpen size={24} />
            <p>Змінити пароль</p>
          </SettingsItem>
          <SettingsItem>
            <HiOutlineTrash size={24} />
            <p>Видалити фото профілю</p>
          </SettingsItem>
          <SettingsItem>
            <TbLogout size={24} />
            <p>Вийти з акаунта</p>
          </SettingsItem>
          <SettingsItem>
            <LuUserX size={24} />
            <p>Видалити аккаунт</p>
          </SettingsItem>
        </ul>
      </div>
      <div>
        <ListTitle>Статистика</ListTitle>
        <ul>
          <StatisticsItem>
            <p>Кількість рецептів</p>
            <p>{expert.recipeAmount}</p>
          </StatisticsItem>
          <StatisticsItem>
            <p>Кількість вподобань</p>
            <p>{expert.ratingAmount}</p>
          </StatisticsItem>
          <StatisticsItem>
            <p>Кількість коментарів під моїми рецептами</p>
            <p>246</p>
          </StatisticsItem>
          <StatisticsItem>
            <p>Середня оцінка моїх рецептів</p>
            <p>{expert.rating}</p>
          </StatisticsItem>
        </ul>
      </div>
      <div>
        <ListTitle>Мої остнанні коментарі</ListTitle>
        <ul>
          <ListItem>
            1. Текст коментаря
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
          <ListItem>
            2. Текст коментаря
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
          <ListItem>
            3. Текст коментаря
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
          <ListItem>
            4. Текст коментаря
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
        </ul>
      </div>
      <div>
        <ListTitle>Моя кулінарна книга</ListTitle>
        <ul>
          <ListItem>
            Мої рецепти
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
          <ListItem>
            Збережені рецепти
            <GoArrowUpRight strokeWidth={1} />
          </ListItem>
        </ul>
      </div>
    </ProfileInformation>
  );
};

export default ProfileDashboard;
