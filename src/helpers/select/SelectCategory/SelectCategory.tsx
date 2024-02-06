import { IoIosArrowDown } from 'react-icons/io';
import {
  SelectItem,
} from './SelectCategory.styled';
import { Block, IconWrapper, Option } from '../Select.styled';

const SelectCategory = () => {
  return (
      <Block>
        <SelectItem defaultValue="">
          <Option value="" disabled hidden>
            Тип страви
          </Option>
          <Option value="breakfest">Сніданки</Option>
          <Option value="firstmeal">Перші страви</Option>
          <Option value="maincourses">Другі страви</Option>
          <Option value="meatdishes">Страви з мʼяса</Option>
          <Option value="fishdishes">Страви з риби</Option>
          <Option value="salads">Салати</Option>
          <Option value="snacks">Закуски</Option>
          <Option value="dessert">Десерти</Option>
        </SelectItem>
        <IconWrapper>
          <IoIosArrowDown size={24}></IoIosArrowDown>
        </IconWrapper>
      </Block>

  );
};

export default SelectCategory;
