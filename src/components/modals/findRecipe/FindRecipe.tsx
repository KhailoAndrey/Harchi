import { useEffect, useMemo } from 'react';
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
import { CuisineEnum, IFormInput, IOption, TypeDishEnum } from '@/types';

function FindRecipe() {
  const { isModalOpen, closeModal } = useModal();
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const dishTypeOptions = useMemo(
    () => [
      { label: ' Оберіть тип страви', value: '' },
      ...Object.entries(TypeDishEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [TypeDishEnum]
  );

  const cuisineOptions = useMemo(
    () => [
      { label: ' Оберіть кухню', value: '' },
      ...Object.entries(CuisineEnum).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    ],
    [CuisineEnum]
  );
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    reset();
    closeModal();
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
                      <Select {...register('dishType')} defaultValue="">
                        {dishTypeOptions.map((option: IOption) =>
                          <option key={option.value} disabled={option.value === ''} value={option.value}>
                            {option.label}
                          </option>
                        )}
                      </Select>
                    </Block>
                    <Block>
                      <Label>Кухня</Label>
                      <Select {...register('cuisine')} defaultValue="">
                        {cuisineOptions.map((option: IOption) =>
                          <option key={option.value} disabled={option.value === ''} value={option.value}>
                            {option.label}
                          </option>
                        )}
                      </Select>
                    </Block>
                  </BlockForm>
                  <BlockForm>
                    <SubBlock>
                      <Block>
                        <Label>Час приготування</Label>
                        <Input
                          {...register('cookTime')}
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
                        {...register('wishProducts')}
                        placeholder="Введіть продукти: курятина, помідори..."
                      />
                    </Block>
                    <Block>
                      <Label>Без продуктів</Label>
                      <Input
                        {...register('withoutProducts')}
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
