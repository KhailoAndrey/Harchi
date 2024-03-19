import Sorting from '../sorting/Sorting';
import { EXPERT_RESIPES_SORTING } from '@/constants/expertsRecipesSorting';
import { SectionLink, SectionList, SectionWrapper } from './CookbookSection.styled';
import { useParams } from 'react-router-dom';


const CookbookSection = ({ children }) => {
  const { section } = useParams();

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
