import { menuItems } from '@/constants/menuItems';
import { Wrapper } from './Menu.styled';
import MenuItem from './MenuItem';
import { IMenuItem } from '@/types';

function Menu() {
  return (
    <Wrapper>
      {menuItems.map((item: IMenuItem) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

export default Menu;
