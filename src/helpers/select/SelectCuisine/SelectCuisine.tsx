import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectCuisine.styled';
import { Block, IconWrapper, Option } from '../Select.styled';

const SelectCuisine = () => {
  return (
      <Block>
        <SelectItem defaultValue="">
          <Option value="" disabled hidden>
            Кухня
          </Option>
          <Option value="ukrainian">Українська</Option>
          <Option value="georgian">Грузинська</Option>
          <Option value="polish">Польська</Option>
          <Option value="eastern">Східна</Option>
          <Option value="italian">Італійська</Option>
          <Option value="jewish">Єврейська</Option>
          <Option value="french">Французька</Option>
          <Option value="moroccan">Мароканська</Option>
          <Option value="greek">Грецька</Option>
          <Option value="japanese">Японська</Option>
          <Option value="european">Європейська</Option>
          <Option value="american">Американська</Option>
        </SelectItem>
        <IconWrapper>
          <IoIosArrowDown size={24}></IoIosArrowDown>
        </IconWrapper>
      </Block>

  );
};

export default SelectCuisine;
