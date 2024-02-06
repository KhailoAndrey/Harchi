import {Text, Title, Wrapper } from "./ExpertsPage.styled";
import ExpertsList from "@/components/authors/expertsList/ExpertsList";

function ExpertsPage() {
    return (
      <Wrapper>
        <Text>Список наших авторів</Text>
        <Title>Автори, які отримали найбільшу кількість вдопобайок</Title>
          <ExpertsList />
      </Wrapper>
    );
}

export default ExpertsPage;