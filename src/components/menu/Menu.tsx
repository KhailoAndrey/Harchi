import { menuItems } from '@/constants/menuItems';
import { Wrapper } from './Menu.styled';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <Wrapper>
      {menuItems.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

export default Menu;
