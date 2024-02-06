import ExpertBio from "@/components/authors/expertBio/ExpertBio";
import { Wrapper } from "./ExpertProfile.styled";
import ExpertRecipes from "@/components/authors/expertRecipes/ExpertRecipes";

const ExpertProfile = () => {

  return (
      <Wrapper>
      <ExpertBio />
      <ExpertRecipes />
    </Wrapper>
  );
};

export default ExpertProfile;