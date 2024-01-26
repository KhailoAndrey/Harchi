import { palette } from './colors';
import { ROUTES } from './routes';

export const menuItems = [
  {
    id: 1,
    label: 'Всі рецепти',
    path: ROUTES.RECEIPTS,
  },
  {
    id: 2,
    label: 'Створити рецепт',
    path: ROUTES.ADD_RECEIPT,
    color: palette.red,
  },
  {
    id: 1,
    label: 'Моя кулінарна книга',
    path: ROUTES.BOOK,
  },
];
