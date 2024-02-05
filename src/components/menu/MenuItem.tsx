import { useNavigate } from 'react-router-dom';
import { Item } from './MenuItem.styled';
import { IMenuItem as IItem } from '../../types';
interface IMenuItem {
  item: IItem;
}
function MenuItem({ item }: IMenuItem) {
  const navigate = useNavigate();
  const { label, startIcon, endIcon, color } = item;

  const onItemClick = () => {
    navigate(item.path);
  };
  return (
    <Item $color={color || ''} onClick={onItemClick}>
      {startIcon}
      {label}
      {endIcon}
    </Item>
  );
}

export default MenuItem;
