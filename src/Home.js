import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/Movie">Movie</Link>
      <Link to="/BookList">BookList</Link>
      <Link to="/Coin">Coin</Link>
      <Link to="/Todo">Todo</Link>
    </>
  );
}

export default Home;
