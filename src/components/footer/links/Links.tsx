import { Container, Text } from './Links.styled';

function Links() {
  return (
    <Container>
      <a href="./receipts">
        <Text>Всі рецепти</Text>
      </a>
      <a href="./book">
        <Text>Моя кулінарна книга</Text>
      </a>
      <a href="./experts">
        <Text>Експерти</Text>
      </a>
    </Container>
  );
}

export default Links;
