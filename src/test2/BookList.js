import styles from "./Book.module.css";

function BookList() {
  const imgData = [{
    bookImg : "http://image.yes24.com/goods/115467467/L"
  },{
    bookImg : "http://image.yes24.com/goods/113416767/L"
  }]
  
    return (
    <div className={styles.bookList}>
      <Book data = {imgData}/>
      <Book data = {imgData}/>
      <Book data = {imgData}/>
      <Book data = {imgData}/>
      <Book data = {imgData}/>
       </div>
  );
}
const Book = (props) => {
  return (
    <div className={styles.book}>
      <Img resultImg = {props.data}/>
      <Title />
      <Author />
    </div>
  );
};

const Img = (props) => {
    console.log(props)
  return (
    <>
      <img src={props.resultImg[0].bookImg} alt="" className={styles.img}></img>
    </>
  );
};

const Title = () => {
  return (
    <>
      <div className={styles.title}>제목</div>
    </>
  );
};
const Author = () => {
  return (
    <>
      <div className={styles.author}>작가</div>
    </>
  );
};

export default BookList;
