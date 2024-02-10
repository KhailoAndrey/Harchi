import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {BASE_URL} from '../../constants/api';
import * as API from '../../utils/api';
import { Wrapper, SH1Title, SDivLine } from "./RecipeCategoryPage.styled";
import { IRecipe } from '../../../types/index';
import image from '../../assets/images/image-not-found.webp';

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
                // console.log("response=", response);
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
            <SH1Title>{categoryName}</SH1Title>
            <SDivLine/>
            <ul>
            {recipes.length>0 && recipes.map((recipe, index)=>(
                <li key={index}>
                    <p>{recipe.title}</p>
                    <p>{recipe.description}</p>
                    <img src={recipe?.mainPhotoURL || image} alt={recipe.title} width="628px"/>
                    <p>{recipe.cookTime}</p>
                    <p>{recipe.difficulty}</p>
                    <p>{recipe.favorite}</p>
                </li>
            ))}
            </ul>
            
  

        </Wrapper>
    );
}

export default RecipeCategoryPage;