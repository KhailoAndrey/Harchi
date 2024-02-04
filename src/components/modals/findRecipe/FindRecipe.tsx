import { useEffect } from 'react';
import { useModal } from '../../../utils/context/Context';
import {
  Block,
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
}

function FindRecipe() {
  const { isModalOpen, closeModal } = useModal();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
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
                  <Block>
                    <Label>Пошук по ключовим словам</Label>
                    <Input {...register('keywords')} />
                    <Label>Тип страви</Label>
                    <Select {...register('typedish')}>
                      <option value="breakfest">Сніданки</option>
                      <option value="firstmeal">Перші страви</option>
                      <option value="maincourses">Другі страви</option>
                      <option value="meatdishes">Страви з мʼяса</option>
                      <option value="fishdishes">Страви з риби</option>
                      <option value="salads">Салати</option>
                      <option value="snacks">Закуски</option>
                      <option value="dessert">Десерти</option>
                    </Select>
                    <Label>Кухня</Label>
                    <Select {...register('cuisine')}>
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
                  <Block>Right block</Block>
                </ModalForm>
                <SubmitButton
                  text={'Підібрати рецепт'}
                  backgroundcolor={gradient.buttonOrange}
                  textcolor={palette.mainWhite}
                />
              </FormContainer>
            </form>
            {/* <Formik
              initialValues={{
                keywords: '',
              }}
              onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                alert(JSON.stringify(values));
                closeModal();
              }}
            >
              <Form>
                <ModalForm>
                  <Block>
                    <label htmlFor="keywords">Пошук по ключовим словам</label>
                    <Field
                      id="keywords"
                      name="keywords"
                      placeholder="Введіть ключове слово"
                    />
                    <label htmlFor="typedish">Тип страви</label>

                    <Field
                      id="typedish"
                      name="typedish"
                      placeholder="Оберіть тип страви"
                    />
                    <label htmlFor="cuisine">Кухня</label>

                    <Field
                      id="cuisine"
                      name="cuisine"
                      placeholder="Оберіть кухню"
                    />
                  </Block>
                  <Block>
                    <label htmlFor="time">Час приготування</label>

                    <Field id="time" name="time" placeholder="Бажаний час" />
                    <label htmlFor="calories">Кількість калорій</label>

                    <Field
                      id="calories"
                      name="calories"
                      placeholder="Кількість калорій"
                    />
                    <label htmlFor="wishproducts">Має містити продукти</label>

                    <Field
                      id="wishproducts"
                      name="wishproducts"
                      placeholder="Введіть продукти: курятина, помідори..."
                    />
                    <label htmlFor="withoutproducts">Без продуктів</label>

                    <Field
                      id="withoutproducts"
                      name="withoutproducts"
                      placeholder="Введіть продукти: горіхи, мед..."
                    />
                  </Block>
                </ModalForm>
                <SubmitButton
                  text={'Підібрати рецепт'}
                  backgroundcolor={gradient.buttonOrange}
                  textcolor={palette.mainWhite}
                  // onClick={onSubmit}
                />
              </Form>
            </Formik> */}
          </ModalWindow>
        </ModalWrapper>
      </Overlay>
    )
  );
}

export default FindRecipe;
