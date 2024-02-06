import Sorting from '@/helpers/sorting/Sorting';
import { SelectBlock, Text, Title, Wrapper } from './ExpertsPage.styled';
import ExpertsList from '@/components/authors/expertsList/ExpertsList';
import { EXPERTS_SORTING } from '@/constants/expertsSorting';

function ExpertsPage() {
  return (
    <Wrapper>
      <Text>Список наших авторів</Text>
      <Title>Автори, які отримали найбільшу кількість вдопобайок</Title>
      <SelectBlock>
        <Sorting list={EXPERTS_SORTING} />
      </SelectBlock>
      <ExpertsList />
    </Wrapper>
  );
}

export default ExpertsPage;
