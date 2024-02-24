import { SortingBlock, SortingList, Option, IconWrapper } from "./Sorting.styled";
import { IoIosArrowDown } from "react-icons/io";

type SortingProps = {
  list: string[];
};

const Sorting = ({list}:SortingProps) => {
  return (
         <SortingBlock>
          <IconWrapper>
            <IoIosArrowDown size={30} />
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
