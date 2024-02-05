import { Item, Link , Photo, Title, Describe, Time, InfoCont, Difficulty, Cont, Owner, Category, Button,OwnerPhoto, Div } from "./cardOfRecipes.styled"
import TimeSvg from '../../../public/cuisinePhoto/time.svg'
import Star from '../../../public/cuisinePhoto/Star.svg';
import StarFull from '../../../public/cuisinePhoto/StarFull.svg'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Filter from "../../../public/cuisinePhoto/filter-edit.svg"

import { useState} from "react";


function CardRecipes ({cards}) {
    const [recipes, setRecipes] = useState(cards);

    
  const handleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipes(updatedRecipes);
    console.log(id)
  };

  const renderStars = (difficulty) => {
    switch (difficulty) {
      case "Легко":
        return (
          <>
            <img src={`${StarFull}`} alt="svg" width={24} />
            <img src={`${Star}`} alt="svg" width={24} />
            <img src={`${Star}`} alt="svg" width={24} />
          </>
        );
      case "Помірно":
        return (
          <>
            <img src={`${StarFull}`} alt="svg" width={24} />
            <img src={`${StarFull}`} alt="svg" width={24} />
            <img src={`${Star}`} alt="svg" width={24} />
          </>
        );
      case "Складно":
        return (
          <>
            <img src={`${StarFull}`} alt="svg" width={24} />
            <img src={`${StarFull}`} alt="svg" width={24} />
            <img src={`${StarFull}`} alt="svg" width={24} />
          </>
        );
      default:
        return null;
    }
  };


    return (<>
    {cards.map(({id, photo, alt, title, describe, timeOfCook, difficulty, owner, category, ownerPhoto}) => (
        <Item key = {id}>
            <Link >
                <Photo src={`./cuisinePhoto/${photo}`} 
           alt = {alt}
           /></Link >
           <Title>{title}</Title>
           <Describe>{describe}</Describe>
           <InfoCont>
            <Cont>
                 <img src={`${TimeSvg}`} alt="svg" width={24}/>
                    <Time>{timeOfCook}</Time>
            </Cont>

            <Cont>
            {/* <img src={`${StarFull}`}  alt="svg" width={24}/>
            <img src={`${Star}`}  alt="svg" width={24}/>
            <img src={`${Star}`}  alt="svg" width={24}/> */}
            {renderStars(difficulty)}
            <Difficulty>{difficulty}</Difficulty>
            </Cont>

            <Button type="button" onClick={() => handleFavorite(id)}>
            {recipes.find((recipe) => recipe.id === id)?.favorite ? (
              <GoHeartFill fill="#9C2B3F" size={24} />
            ) : (
              <GoHeart fill="#9C2B3F" size={24} />
            )}
          </Button>
           </InfoCont>

           <InfoCont>
            <Div>
                <OwnerPhoto src={`./cuisinePhoto/${ownerPhoto}`} 
           alt = {alt}/>
            <Owner>{owner}</Owner>
            </Div>
            <Div>
                <img src={`${Filter}`} width={28}/>
            <Category>{category}</Category> 
            </Div>
           </InfoCont>
        </Item>
    ))}
    </>) 
 }
export default CardRecipes