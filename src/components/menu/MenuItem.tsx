import { useNavigate } from 'react-router-dom';
import { Item } from './MenuItem.styled';

interface IMenuItem {
  item: {
    label: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: string;
    path: string;
    options?: string[];
  };
}
function MenuItem({ item }: IMenuItem) {
  const navigate = useNavigate();
  const { label, startIcon, endIcon, color } = item;

  const onItemClick = () => {
    navigate(item.path);
  };
  return (
    <Item $color={color} onClick={onItemClick}>
      {startIcon}
      {label}
      {endIcon}
    </Item>
  );
}

export default MenuItem;
