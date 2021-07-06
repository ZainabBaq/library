import { List } from "../../styles";
import Library from "./Library";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const LibrariesList = (props) => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  if (!user) history.push("/");
  const [query, setQuery] = useState("");
  const librariesData = useSelector((state) => state.libraries.libraries);
  let libraries = librariesData
    .filter((library) =>
      library.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((library) => <Library library={library} key={library.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List>{libraries}</List>
    </div>
  );
};

export default LibrariesList;
