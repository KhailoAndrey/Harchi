import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectCalories.styled';
import { Block, IconWrapper, Option } from '../Select.styled';
import { useMemo } from 'react';
import { CaloriesAmountEnum } from '@/types';

const SelectCalories = () => {
  const caloriesOptions = useMemo(
    () => [
      { label: 'Кількість калорій', value: '' },
      ...Object.entries(CaloriesAmountEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [CaloriesAmountEnum]
  );

  return (
    <Block>
      <SelectItem defaultValue="">
        {caloriesOptions.map(item => (
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

export default SelectCalories;
