import ExpertProfile from "@/components/authors/profile/ExpertProfile";
import { Title, Wrapper } from "./ExpertEditPage.styled";

const ExpertEditPage = () => {

  return (
      <Wrapper>
          <Title>Мій профіль</Title>
        <ExpertProfile />
        <p>Збережені інгредієнти</p>
    </Wrapper>
  );
};

export default ExpertEditPage;