import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectCalories.styled';
import { Block, IconWrapper, Option } from '../Select.styled';

const SelectCalories = () => {
  return (
    <Block>
      <SelectItem defaultValue="">
        <Option value="" disabled hidden>
          Кількість калорій
        </Option>
        <Option value="ukrainian">менше 100 калорій</Option>
        <Option value="georgian">100-300 калорій</Option>
        <Option value="polish">300-500 калорій</Option>
        <Option value="eastern">більше 500 калорій</Option>
      </SelectItem>
      <IconWrapper>
        <IoIosArrowDown size={24}></IoIosArrowDown>
      </IconWrapper>
    </Block>
  );
};

export default SelectCalories;
