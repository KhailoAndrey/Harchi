import { SearchInput, Wrapper} from './Select.styled';
import SelectCalories from './SelectCalories/SelectCalories';
import SelectCategory from './SelectCategory/SelectCategory';
import SelectCuisine from './SelectCuisine/SelectCuisine';
import SelectTime from './SelectTime/SelectTime';

const Select = () => {
  return (
    <Wrapper>
      <SelectCategory />
      <SelectCuisine />
      <SelectTime />
      <SelectCalories />
      <SearchInput placeholder="Містить продукти"></SearchInput>
      <SearchInput placeholder="Без продуктів"></SearchInput>
    </Wrapper>
  );
};

export default Select;
