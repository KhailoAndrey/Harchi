import { IExpert } from '@/types';
import {
  Wrapper,
  ImgWrapper,
  ExpertImg,
  Bio,
  InfoWrapper,
  IconWrapper,
  Block,
  Name,
  Email,
  RatingBlock,
  Rating,
  DescriptionBlock,
  Description,
  ProfileInformation,
  ListTitle,
  SettingsItem,
  StatisticsItem,
  ListItem,
} from './ExpertProfile.styled';
import { MdAddAPhoto } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { palette } from '@/constants/colors';
import { HiOutlineLockOpen } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi2';
import { TbLogout } from 'react-icons/tb';
import { LuUserX } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';

const expert: IExpert = {
  id: 1,
  email: 'myemail@gmail.com',
  photo: 'public/experts/photo1.png',
  profession: 'Кухар, телеведучий',
  recipeAmount: 50,
  rating: 4.9,
  ratingAmount: 123,
  name: 'Поліна Світлоока',
  description:
    'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
};

const ExpertProfile = () => {
  return (
    <div>
      <Wrapper>
        <ImgWrapper>
          <ExpertImg src={expert.photo} />
          <IconWrapper>
            <MdAddAPhoto size={17} fill={palette.mainWhite} />
          </IconWrapper>
        </ImgWrapper>
        <Bio>
          <InfoWrapper>
            <Block>
              <Name>{expert.name}</Name>
              <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
            </Block>
            <Block>
              <Email>{expert.email}</Email>
              <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
            </Block>
          </InfoWrapper>
          <RatingBlock>
            <FaRegFaceSmile size={24} style={{ cursor: 'pointer' }} />
            <Rating>
              {expert.rating} ({expert.ratingAmount} оцінок)
            </Rating>
          </RatingBlock>
          <DescriptionBlock>
            <Description>{expert.description}</Description>
            <RiPencilFill size={15} style={{ cursor: 'pointer' }} />
          </DescriptionBlock>
        </Bio>
      </Wrapper>
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
              <p>{expert.recipeAmount}</p></StatisticsItem>
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
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
          <ListItem>
            2. Текст коментаря
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
          <ListItem>
            3. Текст коментаря
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
          <ListItem>
            4. Текст коментаря
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
        </ul>
      </div>
      <div>
        <ListTitle>Моя кулінарна книга</ListTitle>
        <ul>
          <ListItem>
            Мої рецепти
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
          <ListItem>
            Збережені рецепти
            <GoArrowUpRight strokeWidth={1}/>
          </ListItem>
        </ul>
      </div>
</ProfileInformation>
    </div>
  );
};

export default ExpertProfile;
