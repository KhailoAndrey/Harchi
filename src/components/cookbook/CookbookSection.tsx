import { ReactNode, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sorting from '../sorting/Sorting';
import { EXPERT_RESIPES_SORTING } from '@/constants/expertsRecipesSorting';
import {
  IconWrapper,
  Option,
  SectionLink,
  SectionList,
  SectionWrapper,
  Select,
  SelectBlock,
  SortingBlock,
} from './CookbookSection.styled';
import { IoIosArrowDown } from "react-icons/io";
import { palette } from '@/constants/colors';

type CookbookSectionProps = {
  children: ReactNode;
};

const CookbookSection = ({ children }: CookbookSectionProps) => {
  const { section } = useParams();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!section) {
      navigate('myRecipes');
    }
  }, []);

  const handleChangedSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangedSize);
    return () => {
      window.removeEventListener('resize', handleChangedSize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 768 && (
        <SelectBlock>
          <IconWrapper>
            <IoIosArrowDown size={20} fill={palette.mainWhite} />
          </IconWrapper>
          <Select>
            <Option>
              <NavLink to={'myRecipes'}>Мої рецепти</NavLink>
            </Option>
            <Option>
              <NavLink to={'savedRecipes'}>Збережені рецепти</NavLink>
              </Option>
            <Option>
              <NavLink to={'savedIngredients'}>Збережений список інгредієнтів</NavLink>
              </Option>
          </Select>
        </SelectBlock>
      )}
      {windowWidth >= 768 && (
        <SectionWrapper>
          <SectionList>
            <li>
              <SectionLink to={'myRecipes'}>Мої рецепти</SectionLink>
            </li>

            <li>
              <SectionLink to={'savedRecipes'}>Збережені рецепти</SectionLink>
            </li>

            <li>
              <SectionLink to={'savedIngredients'}>
                Збережений список інгредієнтів
              </SectionLink>
            </li>
          </SectionList>
          <SortingBlock>
            {section !== 'savedIngredients' && <Sorting list={EXPERT_RESIPES_SORTING}/>}
          </SortingBlock>
        </SectionWrapper>
      )}
      {children}
    </div>
  );
};

export default CookbookSection;
