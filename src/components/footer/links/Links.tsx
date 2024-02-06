import { menuItems } from '@/constants/footerlinks';
import { Container } from './Links.styled';
import { IMenuItem } from '@/types';
import MenuItem from '@/components/menu/MenuItem';

function Links() {
  return (
    <Container>
      {menuItems.map((item: IMenuItem) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Links;
