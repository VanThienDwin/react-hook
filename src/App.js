
import TodoList from './components/todoList';
import './App.css';
import { useState } from 'react';
import TodoForm from './components/todoForm';

function App() {
  const [todoList,setTodoList]=useState([
    {id:1,title:'Cuộc sống là những cú lừa'},
    {id:2,title:'Ta không lừa họ'},
    {id:3,title:'Thì họ lừa ta'}
  ]);

  function handleTodoClick(todo){
    //lấy index,Nếu có index thì return về index còn không return về -1
    const index=todoList.findIndex(x=>x.id===todo.id);
    //Kiểm tra có index hay không, nếu không thì return ngay
    if(index<0) return;
    //Tạo 1 cái list mới gán toàn bộ list cũ sang bằng dấu ...
    const newTodoList=[...todoList];
    //Xóa 1 phần tử từ vị trí index đã chọn
    newTodoList.splice(index,1);
    //cập nhật sate mới
    setTodoList(newTodoList);
  }
  //Sự kiện khi TodoForm submit
  function handleTodoFormSubmit(formValues){
    //thêm 1 cái todo list mới
    const newTodo={
      id:todoList.length+1,//tạo 1 cái id mới khác ib đã có, trường hợp này ví dụ cho id khỏi trùng
      ...formValues //lấy toàn bộ các thuộc tính trong formvalues
    }
    const newTodoList=[...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
         <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}
export default App;
