import image from '../../assets/images/image-not-found.webp';
import {
    GoClock,
    GoHeart,
    GoHeartFill,
  } from 'react-icons/go';
import {
    SDivWrapper, 
    SDivWrapperDescription, 
    SPTitle, 
    SPDescription,
    SDivInfo,
    SImgMainPhoto,
    SDivWrapperInformation,
    SDivWrapperInfo,
    SP,
    SImgCircle,
    SDivWrapperOwner


} from "../CategoryRecipe/CategoryRecipe.styled";
import renderStars from '@/helpers/renderStars/renderStars';
import { IRecipe } from '../../types/index';


type CategoryRecipeProps = {
    recipe: IRecipe;
 };

const CategoryRecipe = ({recipe}: CategoryRecipeProps)=>{
    const {title, description, mainPhotoURL, cookTime, difficulty, favorite, username, avatar}=recipe;
    let cardImage = image;

    if(mainPhotoURL!==" " && mainPhotoURL!==undefined){
        cardImage=mainPhotoURL;
    }

return (
    <>
        <SDivWrapper>
            <SDivWrapperDescription>
                <SPTitle>{title}</SPTitle>
                <SPDescription>{description}</SPDescription>
            </SDivWrapperDescription>
            <SDivInfo>
                <SImgMainPhoto src={cardImage} alt={title} width="628px"/>
                <SDivWrapperInformation>
                    <SDivWrapperInfo>
                        <GoClock/>
                        <SP>{cookTime}</SP>
                    </SDivWrapperInfo>
                    <SDivWrapperInfo>
                        {renderStars(difficulty)}
                        <p>{difficulty}</p>
                    </SDivWrapperInfo>
                    {favorite ? (
                        <GoHeartFill fill="#9C2B3F" size={24} />
                        ) : (
                        <GoHeart fill="#9C2B3F" size={24} />
                    )}
                </SDivWrapperInformation>
                <SDivWrapperOwner>
                    <SImgCircle src={avatar || image} width="40px" height="40px" alt={username}/>
                    <SP>{username}</SP>
                </SDivWrapperOwner>
            </SDivInfo>
        </SDivWrapper>
    </>
    
    );


}

export default CategoryRecipe;