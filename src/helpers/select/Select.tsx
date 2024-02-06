import { SearchInput, Wrapper} from './Select.styled';
import SelectCalories from './SelectCalories/SelectCalories';
import SelectCategory from './SelectTypeDish/SelectTypeDish';
import SelectCuisine from './SelectCuisine/SelectCuisine';
import SelectTime from './SelectTime/SelectTime';

const Select = () => {
  return (
    <Wrapper>
      <SelectCategory />
      <SelectCuisine />
      <SelectTime />
      <SelectCalories />
      <SearchInput placeholder="Містить продукти" />
      <SearchInput placeholder="Без продуктів" />
    </Wrapper>
  );
};

export default Select;
