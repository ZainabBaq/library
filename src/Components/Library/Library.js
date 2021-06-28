import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const Library = (props) => {
  const library = props.library;
  return (
    <LibraryItem>
      <h3>{library.name}</h3>
      <Link to={`/libraries/${library.slug}`}>
        <img src={library.img} />
      </Link>
    </LibraryItem>
  );
};

export default Library;
