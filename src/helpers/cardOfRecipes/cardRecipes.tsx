import { Item, Link , Photo, Title, Describe, Time, InfoCont, Difficulty, Cont, Owner, Category, Button,OwnerPhoto, Div } from "./cardOfRecipes.styled"
import TimeSvg from '../../../public/cuisinePhoto/time.svg'
import Star from '../../../public/cuisinePhoto/Star.svg';
import StarFull from '../../../public/cuisinePhoto/StarFull.svg'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Filter from "../../../public/cuisinePhoto/filter-edit.svg"
 
import { useState} from "react";
import { ICard } from "@/types";
import { DIFFICULTY_LEVEL } from "@/constants";
interface ICardRecipes {
  cards: ICard[]
}

function CardRecipes ({cards}: ICardRecipes) {
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
      case DIFFICULTY_LEVEL.easy:
        return (
          <>
            <img src={`${StarFull}`}  width={24} />
            <img src={`${Star}`}  width={24} />
            <img src={`${Star}`}  width={24} />
          </>
        );
      case DIFFICULTY_LEVEL.moderately :
        return (
          <>
            <img src={`${StarFull}`}  width={24} />
            <img src={`${StarFull}`}  width={24} />
            <img src={`${Star}`}  width={24} />
          </>
        );
      case DIFFICULTY_LEVEL.hard :
        return (
          <>
            <img src={`${StarFull}`} width={24} />
            <img src={`${StarFull}`} width={24} />
            <img src={`${StarFull}`} width={24} />
          </>
        );
      default:
        return null;
    }
  };
  const currentRecipe = (id) => recipes.find((recipe) => recipe.id === id)


    return (<>
    {cards.map(({id, photo, title, describe, timeOfCook, difficulty, owner, category, ownerPhoto}) => (
        <Item key = {id}>
            <Link >
                <Photo src={`./cuisinePhoto/${photo}`} 
           /></Link >
           <Title>{title}</Title>
           <Describe>{describe}</Describe>
           <InfoCont>
            <Cont>
                 <img src={`${TimeSvg}`} alt="svg" width={24}/>
                    <Time>{timeOfCook}</Time>
            </Cont>

            <Cont>
            {renderStars(difficulty)}
            <Difficulty>{difficulty}</Difficulty>
            </Cont>

            <Button type="button" onClick={() => handleFavorite(id)}>
            {currentRecipe(id)?.favorite ? (
              <GoHeartFill fill="#9C2B3F" size={24} />
            ) : (
              <GoHeart fill="#9C2B3F" size={24} />
            )}
          </Button>
           </InfoCont>

           <InfoCont>
            <Div>
                <OwnerPhoto src={`./cuisinePhoto/${ownerPhoto}`} />
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