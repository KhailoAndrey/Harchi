import { useEffect } from 'react';
import { useModal } from '../../../utils/context/Context';
import {
  Block,
  BlockForm,
  CloseBtn,
  FormContainer,
  Input,
  Label,
  ModalForm,
  ModalTitle,
  ModalWindow,
  ModalWrapper,
  Overlay,
  Select,
  SubBlock,
} from './FindRecipe.styled';
import { LuUtensilsCrossed } from 'react-icons/lu';
import SubmitButton from '@/helpers/buttons/SubmitButton';
import { gradient, palette } from '@/constants/colors';
// import { Field, Form, Formik } from 'formik';
import { useForm, SubmitHandler } from 'react-hook-form';

enum TypeDishEnum {
  breakfest = 'Сніданки',
  firstmeal = 'Перші страви',
  maincourses = 'Другі страви',
  meatdishes = 'Страви з мʼяса',
  fishdishes = 'Страви з риби',
  salads = 'Салати',
  snacks = 'Закуски',
  dessert = 'Десерти',
}

enum CuisineEnum {
  ukrainian = 'Українська',
  georgian = 'Грузинська',
  polish = 'Польська',
  eastern = 'Східна',
  italian = 'Італійська',
  jewish = 'Єврейська',
  french = 'Французька',
  moroccan = 'Мароканська',
  greek = 'Грецька',
  japanese = 'Японська',
  european = 'Європейська',
  american = 'Американська',
}

interface IFormInput {
  keywords: string;
  typedish: TypeDishEnum;
  cuisine: CuisineEnum;
  cooktime: number;
  calories: number;
  wishproducts: string;
  withoutproducts: string;
}

function FindRecipe() {
  const { isModalOpen, closeModal } = useModal();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    reset();
    closeModal();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0px';
    }
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <Overlay onClick={handleBackdropClick}>
        <ModalWrapper>
          <CloseBtn onClick={closeModal}>
            <LuUtensilsCrossed />
          </CloseBtn>
          <ModalWindow>
            <ModalTitle>Підбір рецепту</ModalTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormContainer>
                <ModalForm>
                  <BlockForm>
                    <Block>
                      <Label>Пошук по ключовим словам</Label>
                      <Input
                        {...register('keywords')}
                        placeholder="Введіть ключове слово"
                      />
                    </Block>
                    <Block>
                      <Label>Тип страви</Label>
                      <Select {...register('typedish')} defaultValue="">
                        <option value="" disabled hidden>
                          Оберіть тип страви
                        </option>
                        <option value="breakfest">Сніданки</option>
                        <option value="firstmeal">Перші страви</option>
                        <option value="maincourses">Другі страви</option>
                        <option value="meatdishes">Страви з мʼяса</option>
                        <option value="fishdishes">Страви з риби</option>
                        <option value="salads">Салати</option>
                        <option value="snacks">Закуски</option>
                        <option value="dessert">Десерти</option>
                      </Select>
                    </Block>
                    <Block>
                      <Label>Кухня</Label>
                      <Select {...register('cuisine')} defaultValue="">
                        <option value="" disabled hidden>
                          Оберіть кухню
                        </option>
                        <option value="ukrainian">Українська</option>
                        <option value="georgian">Грузинська</option>
                        <option value="polish">Польська</option>
                        <option value="eastern">Східна</option>
                        <option value="italian">Італійська</option>
                        <option value="jewish">Єврейська</option>
                        <option value="french">Французька</option>
                        <option value="moroccan">Мароканська</option>
                        <option value="greek">Грецька</option>
                        <option value="japanese">Японська</option>
                        <option value="european">Європейська</option>
                        <option value="american">Американська</option>
                      </Select>
                    </Block>
                  </BlockForm>
                  <BlockForm>
                    <SubBlock>
                      <Block>
                        <Label>Час приготування</Label>
                        <Input
                          {...register('cooktime')}
                          placeholder="Бажаний час, хвилин"
                        />
                      </Block>
                      <Block>
                        <Label>Кількість калорій</Label>
                        <Input
                          {...register('calories')}
                          placeholder="Кількість калорій"
                        />
                      </Block>
                    </SubBlock>
                    <Block>
                      <Label>Має містити продукти</Label>
                      <Input
                        {...register('wishproducts')}
                        placeholder="Введіть продукти: курятина, помідори..."
                      />
                    </Block>
                    <Block>
                      <Label>Без продуктів</Label>
                      <Input
                        {...register('withoutproducts')}
                        placeholder="Введіть продукти: горіхи, мед..."
                      />
                    </Block>
                  </BlockForm>
                </ModalForm>
                <SubmitButton
                  text={'Підібрати рецепт'}
                  backgroundcolor={gradient.buttonOrange}
                  textcolor={palette.mainWhite}
                />
              </FormContainer>
            </form>
          </ModalWindow>
        </ModalWrapper>
      </Overlay>
    )
  );
}

export default FindRecipe;
