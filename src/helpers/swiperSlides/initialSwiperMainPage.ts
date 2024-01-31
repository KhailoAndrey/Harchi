import { gradient, palette } from './../../constants/colors/index';

export const InitialPropsHero = {
  swiperflag: 'right',
  containerWidth: '100%',
  infoblock: {
    size: {
      w: '732px',
      h: '675px',
    },
    bgc: palette.green,
    gap: '48px',
    pl: '80px',
  },
  info: `Кулінарний шик: знайдіть свій ідеальний рецепт за допомогою легкого та
            швидкого пошуку за фільтрами`,
  redirectionbutton: {
    isModal: 'FindRecipe',
    text: 'Спробувати',
    backgroundcolor: gradient.buttonOrange,
    textcolor: palette.mainWhite,
  },
  slider: {
    size: {
      w: '708px',
      h: '675px',
    },
  },
  swiperblock: {
    loop: true,
    slicestartindex: 0,
    width: 708,
  },
};

export const InitialPropsWelcome = {
  swiperflag: 'left',
  containerWidth: '1280px',
  infoblock: {
    size: {
      w: '652px',
      h: '472px',
    },
    bgc: palette.red,
    gap: '24px',
    pl: '24px',
  },
  info: `Ласкаво просимо на наш кулінарний портал`,
  infotext: `Наш сайт розроблений для всіх — незалежно від вашого досвіду у
            готуванні. Відкрийте для себе найсмачніші домашні рецепти, які легко
            і швидко приготувати`,
  slider: {
    size: {
      w: '628px',
      h: '472px',
    },
  },
  swiperblock: {
    loop: true,
    slicestartindex: 3,
    width: 628,
  },
};

export const InitialPropsMoreRecipes = {
  swiperflag: 'left',
  containerWidth: '1280px',
  infoblock: {
    size: {
      w: '652px',
      h: '472px',
    },
    bgc: palette.green,
    gap: '48px',
    pl: '24px',
  },
  info: `Дізнайся ще більше крутих рецептів!`,
  redirectionbutton: {
    path: "/recipes",
    text: 'Більше рецептів',
    backgroundcolor: gradient.buttonOrange,
    textcolor: palette.mainWhite,
  },
  slider: {
    size: {
      w: '628px',
      h: '472px',
    },
  },
  swiperblock: {
    loop: false,
    slicestartindex: 6,
    width: 628,
  },
};
