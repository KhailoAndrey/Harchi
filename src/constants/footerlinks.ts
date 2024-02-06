import { palette } from '@/constants/colors';
import { ROUTES } from './routes';

export const menuItems = [
  {
    id: 1,
    label: 'Всі рецепти',
    path: ROUTES.RECEIPTS,
    color: palette.mainWhite,
  },
  {
    id: 2,
    label: 'Моя кулінарна книга',
    path: ROUTES.BOOK,
    color: palette.mainWhite,
  },
  {
    id: 3,
    label: 'Експерти',
    path: ROUTES.EXPERTS,
    color: palette.mainWhite,
  },
];
