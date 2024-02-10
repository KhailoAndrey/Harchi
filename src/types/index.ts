export interface ICard {
  id: number;
  photo: string;
  title: string;
  describe: string;
  timeOfCook: string;
  difficulty: string;
  favorite: boolean;
  owner: string;
  category: string;
  ownerPhoto: string;
}

export interface IInitialProps {
  infotext?: string;
  swiperflag: string;
  containerWidth: string;
  borderradius?: string;
  infoblock: {
    size: {
      w: string;
      h: string;
    };
    bgc: string;
    gap: string;
    pl: string;
  };
  info: string;
  redirectionbutton?: {
    path?: string;
    isModal?: boolean;
    text: string;
    backgroundcolor: string;
    textcolor: string;
  };
  slider: {
    size: {
      w: string;
      h: string;
    };
  };
  swiperblock: {
    loop: boolean;
    slicestartindex: number;
    width: number;
  };
}

export interface IMenuItem {
  id: number;
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: string;
  path: string;
  options?: string[];
}

export enum TypeDishEnum {
  breakfast = 'Сніданки',
  firstMeal = 'Перші страви',
  mainCourses = 'Другі страви',
  meatDishes = 'Страви з мʼяса',
  fishDishes = 'Страви з риби',
  salads = 'Салати',
  snacks = 'Закуски',
  desserts = 'Десерти',
}

export enum CuisineEnum {
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

export interface IFormInput {
  keywords: string;
  dishType: TypeDishEnum;
  cuisine: CuisineEnum;
  cookTime: number;
  calories: number;
  wishProducts: string;
  withoutProducts: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IExpert {
  id: number;
  photo: string;
  profession: string;
  recipeAmount: number;
  rating: number;
  ratingAmount: number;
  name: string;
  description: string;
}

export enum CaloriesAmountEnum {
  less100 = 'менше 100 кКал',
  low = '100-200 кКал',
  mediumLow = '200-300 кКал',
  medium = '300-400 кКал',
  mediumHigh = '400-500 кКал',
  more500 = 'більше 500 кКал',
}

export enum TimeEnum {
  less15m = 'до 15 хв',
  less30m = 'до 30 хв',
  low = '30хв - 1 год',
  mediumLow = '1 - 2 год',
  medium = '2 - 3 год',
  mediumHigh = '4 - 5 год',
  more5h = 'більше 5 год',
}

export interface ISlide {
  id: number;
  photo: string;
  alt: string;
  title: string;
}