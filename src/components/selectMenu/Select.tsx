import { SearchInput, Wrapper} from './Select.styled';
import SelectCalories from '../../helpers/select/SelectCalories/SelectCalories';
import SelectCategory from '../../helpers/select/SelectTypeDish/SelectTypeDish';
import SelectCuisine from '../../helpers/select/SelectCuisine/SelectCuisine';
import SelectTime from '../../helpers/select/SelectTime/SelectTime';

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
