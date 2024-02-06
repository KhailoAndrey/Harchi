import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectTime.styled';
import { Block, IconWrapper, Option } from '../Select.styled';

const SelectTime = () => {
  return (
      <Block>
        <SelectItem defaultValue="">
          <Option value="" disabled hidden>
            Час приготування
          </Option>
          <Option value="ukrainian">до 30 хв</Option>
          <Option value="georgian">30 хв - 1 год</Option>
          <Option value="polish">1 - 2 год</Option>
          <Option value="eastern">більше 2 год</Option>
        </SelectItem>
        <IconWrapper>
          <IoIosArrowDown size={24}></IoIosArrowDown>
        </IconWrapper>
      </Block>

  );
};

export default SelectTime;
