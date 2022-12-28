import style from "./Todo.module.css"


function TodoItems(props) {
    

  return (
    <div className={style.todoItem}>
        <li>{`${props.id} ${props.title}`   }</li>
    </div>
    
  );
}

export default TodoItems;
