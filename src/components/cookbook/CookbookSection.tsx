import Sorting from '../sorting/Sorting';
import { EXPERT_RESIPES_SORTING } from '@/constants/expertsRecipesSorting';
import { SectionLink, SectionList, SectionWrapper } from './CookbookSection.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

type CookbookSectionProps = {
  children: ReactNode;
}

const CookbookSection = ({ children }:CookbookSectionProps) => {
  const { section } = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    if (!section) {
      navigate('myRecipes');
    }
  }, []);

  return (
    <div>
      <SectionWrapper>
         <SectionList>
        <li>
          <SectionLink to={'myRecipes'}>Мої рецепти</SectionLink>
        </li>

        <li>
          <SectionLink to={'savedRecipes'}>Збережені рецепти</SectionLink>
        </li>

        <li>
          <SectionLink to={'savedIngredients'}>Збережений список інгредієнтів</SectionLink>
        </li>
      </SectionList>
      {section !== 'savedIngredients' && <Sorting list={EXPERT_RESIPES_SORTING}/>}
     </SectionWrapper>
      {children}
    </div>
  );
};

export default CookbookSection;
