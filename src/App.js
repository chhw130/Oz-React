import BookList from "./test2/BookList";
import PropsTest2 from "./test2/PropsTest2";
import Coin from "./test2/Coin";
import Todo from "./test/Todo";
import { Routes, Route} from "react-router-dom";
import Movie from "./project/Movie";
import styles from "./project/Movie.module.css";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    //   <>
    //     {/* <BookList/>
    //     <Todo /> */}
    // <div className={styles.MainTitle}>
    //     <Movie />
    //     {/* <PropsTest2 /> */}

    // </div>
    //   </>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Movie/detail/:id" element={<Detail />}></Route>
        <Route path="/BookList" element={<BookList />}></Route>
        <Route path="/Coin" element={<Coin />}></Route>
        <Route path="/Todo" element={<Todo />}></Route>
      </Routes>

    
  );
}
export default App;
