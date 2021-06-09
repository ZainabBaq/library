import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={() => props.deleteBook(props.bookId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
