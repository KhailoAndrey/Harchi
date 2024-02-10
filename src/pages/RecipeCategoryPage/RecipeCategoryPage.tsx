import { useParams } from 'react-router-dom';
import { Wrapper } from "./RecipeCategoryPage.styled";

const RecipeCategoryPage = () =>{
    const { categoryName } = useParams();
    return (
        <Wrapper>
            <h1>Recipe Category Page</h1>
            <p>{categoryName}</p>
        </Wrapper>
    );
}

export default RecipeCategoryPage;