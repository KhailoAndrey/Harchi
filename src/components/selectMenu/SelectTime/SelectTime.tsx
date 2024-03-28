import { IoIosArrowDown } from 'react-icons/io';
import { SelectItem } from './SelectTime.styled';
import { Block, IconWrapper, Option } from '../Select.styled';
import { useMemo } from 'react';
import { TimeEnum } from '@/types';

const SelectTime = () => {
  const timeOptions = useMemo(
    () => [
      { label: 'Час приготування', value: '' },
      ...Object.entries(TimeEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [TimeEnum]
  );

  return (
      <Block>
        <SelectItem defaultValue="">
          {timeOptions.map(item => (
          <Option
            key={item.value}
            hidden={item.value === ''}
            value={item.value}
          >
            {item.label}
          </Option>
        ))}
        </SelectItem>
        {/* <IconWrapper>
          <IoIosArrowDown size={18}></IoIosArrowDown>
        </IconWrapper> */}
      </Block>

  );
};

export default SelectTime;
