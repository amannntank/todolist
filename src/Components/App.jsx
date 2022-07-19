import { useState } from 'react';
import '.././styleSheet/styles.css';
import ToDoList from './ToDoItems';

function App() {
  const [list, setList] = useState("");
  const [vList, setVList] = useState([])
  
  const handleChange = (event) => {
    const {value} = event.target;
    setList(()=>{
      return value
    })
  }

  const onClickUpdate = () =>{
    setVList((preValue)=>{
      return[
        ...preValue, list
      ]
    })
    setList("")
    
  }

  const deleteItem = (id) => {
    setVList((preValue) => {
      return preValue.filter((value,index)=>{
        return id !== index
      })
    })
  }


  return (
    <div >
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>

          <div className="form" >
            <input onChange={handleChange} value={list} name='toDoList' type="text" />
            <button onClick={onClickUpdate}>
              <span>Add</span>
            </button>
          </div>

          <div>
            <ul>
              {vList.map((vList,index) => 
              { return <ToDoList    
              key={index}
              id={index}
              item={vList} 
              onClickDelete={deleteItem}
              />})}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
  