import { SortingBlock, SortingList, Option } from "./Sorting.styled";

type SortingProps = {
  list: string[];
};

const Sorting = ({list}:SortingProps) => {
  return (
         <SortingBlock>
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
