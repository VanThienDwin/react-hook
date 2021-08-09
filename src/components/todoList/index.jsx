import React from 'react';
import PropTypes from 'prop-types';

//xét kiểu cho todolist
TodoList.propTypes = {
    todos:PropTypes.array,
    onTodoClick:PropTypes.func
};
//Xét mặc định cho todolist
TodoList.defaultProps={
    todos:[],
    onTodoClick:null
}
function TodoList(props) {
    const {todos,onTodoClick}=props;
    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
        <div>
           {todos.map(todo=>(
               <li key={todo.id}
               onClick={()=>handleClick(todo)}
               style={{cursor:"pointer"}}
               >
                   {todo.title}
               </li>
           ))} 
        </div>
    );
}

export default TodoList;