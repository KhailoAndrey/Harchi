import { SortingBlock, IconWrapper, SortingList, Option } from "./Sorting.styled";
import { IoIosArrowDown } from "react-icons/io";

type SortingProps = {
  list: string[];
};

const Sorting = ({list}:SortingProps) => {
  return (
         <SortingBlock>
          <IconWrapper>
            <IoIosArrowDown size={30}></IoIosArrowDown>
          </IconWrapper>
          <SortingList>{
              list.map((select, index) => (
                  <Option key={index} value={select}>{select}</Option>
              ))
          }
          </SortingList>
        </SortingBlock>
  );
};

export default Sorting;
