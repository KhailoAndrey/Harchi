import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectCuisine.styled';
import { Block, IconWrapper, Option } from '../Select.styled';
import { useMemo } from 'react';
import { CuisineEnum } from '@/types';

const SelectCuisine = () => {
    const cuisineOptions = useMemo(
    () => [
      { label: 'Кухня', value: '' },
      ...Object.entries(CuisineEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [CuisineEnum]
  );

  return (
      <Block>
        <SelectItem defaultValue="">
          {cuisineOptions.map(item => (
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

export default SelectCuisine;
