import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodo from './Component/ListTodo'
import Header from './Component/Header'
 
  function app() {
    const [states, setStates] = useState([]);
   const setLocalAndSave = (newTask) => {
      setStates(newTask)
      localStorage.setItem('token', JSON.stringify(newTask));
    }
    
    function handleclick(name) {
      console.log('name', name);
      const todos = {
        name: name,
        id: Math.random()
      }
      console.log('states', states);
      setLocalAndSave([todos, ...states]);
    }

    function handleEditing(name, id){
      setStates (states.map((todo) => {
          if (todo.id === id) {
            todo.name = name;
          }
          return todo;
        }))
        localStorage.setItem('token', JSON.stringify(states));
    }

    function handDelete(id) {
      console.log(id);
      setStates(states.filter(item => item.id !== id));
    }
    // function handleEdit() {
    //   const [changText,setChangText] = useState(false)
    //   setChangText()
    // }

    useEffect(() => {
      // localStorage.getItem('token', JSON.stringify(items));
      const token = JSON.parse(localStorage.getItem('token'))
      if(token) {
        setStates(token)
      }
      
    }, []);
    return (
      <div>
        <h1 className='text-blue-600 mb-6'>Todo</h1>
        < Header onClick3={handleclick} />
        <div className='flex gap-2'>
          <ListTodo states={states} handDelete={handDelete} handleEditing={handleEditing}/>  
        </div>
      </div>
    );
  }
export default app