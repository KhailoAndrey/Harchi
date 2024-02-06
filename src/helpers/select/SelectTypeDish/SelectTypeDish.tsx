import { IoIosArrowDown } from 'react-icons/io';
import {
  SelectItem,
} from './SelectTypeDish.styled';
import { Block, IconWrapper, Option } from '../Select.styled';
import { useMemo } from 'react';
import { TypeDishEnum } from '@/types';

const SelectCategory = () => {
    const typeDishOptions = useMemo(
    () => [
      { label: 'Тип страви', value: '' },
      ...Object.entries(TypeDishEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [TypeDishEnum]
  );

  return (
      <Block>
        <SelectItem defaultValue="">
          {typeDishOptions.map(item => (
          <Option
            key={item.value}
            hidden={item.value === ''}
            value={item.value}
          >
            {item.label}
          </Option>
        ))}
        </SelectItem>
        <IconWrapper>
          <IoIosArrowDown size={24}></IoIosArrowDown>
        </IconWrapper>
      </Block>

  );
};

export default SelectCategory;
