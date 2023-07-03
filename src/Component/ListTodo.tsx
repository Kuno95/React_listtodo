import { useState } from "react";


function ListTodo({states,handDelete,handleEditing}) 
{
  
  const [editing,setEditing] = useState(false)
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  function handleEdit(){
    setEditing(true);
  };
  
    const ListTodos = states.map((state, index) =>
      <div key={state.id} className=' bg-yellow-300 w-60 h-10'>
        <div className='flex  justify-between'>
          <li style={viewMode} className=' list-none ' key={index}> 
            {state.name}  
          </li> 
          <li className=' list-none '>
          <input value={state.name} className="w-20 h-10 border border-black rounded-sm bg-green-500" type="text" style={editMode} 
          onChange={(event) => handleEditing(event.target.value, state.id)}
          onKeyDown={handleUpdatedDone}
          />  
          </li>
          <div> 
            <button className="w-10 h-10 p-0 rounded-3xl" onClick={ ()=> handDelete(state.id)}>Del</button>
            <button className="w-10 h-10 p-0 rounded-3xl" onClick={ () => handleEdit() }>Edit</button>
          </div>
        </div>
      </div>
    ) 
    return (
      <>
      <div>
        {ListTodos}
       
      </div>
      </>
    )
  }
  export default ListTodo