import Sorting from '@/components/sorting/Sorting';
import { SelectBlock, Text, Title, Wrapper } from './ExpertsPage.styled';
import { EXPERTS_SORTING } from '@/constants/expertsSorting';
import ExpertsList from '@/components/authors/expertsList/ExpertsList';

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
