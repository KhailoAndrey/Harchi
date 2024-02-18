import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {BASE_URL} from '../../constants/api';
import * as API from '../../utils/api';
import { Wrapper, SDivContainer, SH1Title, SDivLine, SLi } from "./RecipeCategoryPage.styled";
import CategoryRecipe from "../../components/CategoryRecipe/CategoryRecipe";



const RecipeCategoryPage = () =>{
    const { categoryName } = useParams();
    const [recipes, setRecipes]=useState([]);

    useEffect(() => {
        if (!categoryName) {
          return;
        }

        const fetchCategoryRecipes=()=>{
            const fetchQuery = `${BASE_URL}/recipes?category=${categoryName}&page=1&limit=4`;
            API.getFetchQuery(fetchQuery)
            .then(response=>{  
                setRecipes(response);
                console.log("response=", response);
            })
            .catch (error=>{
                console.log(error);
            });     
        }
        
        fetchCategoryRecipes();
      },[categoryName])

    console.log("recipes=", recipes);

    return (
        <Wrapper>
            <SDivContainer>
                <SH1Title>{categoryName}</SH1Title>
                <SDivLine/>
                <ul>
                {recipes.length>0 && recipes.map((recipe, index)=>(
                    <SLi key={index}>
                        <CategoryRecipe recipe={recipe}/>
                    </SLi>
                ))}
                </ul>
                
  
            </SDivContainer>
        </Wrapper>
    );
}

export default RecipeCategoryPage;