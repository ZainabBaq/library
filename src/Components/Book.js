import { Item } from "../styles";

const Book = (props) => {
  const book = props.product;

  return (
    <Item>
      <img src={book.img} />
      <h3>{book.name}</h3>
      <p>{book.price} KD</p>
    </Item>
  );
};

export default Book;
