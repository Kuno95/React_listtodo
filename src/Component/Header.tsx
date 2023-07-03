import { useState } from 'react'

function Header({onClick3}) {
    const [nameValue, SetNameValue] = useState('');
    function onSetValue(event) {
      SetNameValue(event.target.value)
    }
     function onClick1 (event) {
      event.preventDefault;
      onClick3(nameValue)
      SetNameValue('')
    }
   
    return (
      <>
        <input
          onChange={onSetValue}
          placeholder=' Add a new task'
          className='border border-black w-60 h-10'
          type="text"
          value={nameValue}
        />
        <button className='bg-blue-600 w-30 h-10 ml-2' onClick={onClick1}>Create</button>
      </>
    );
  }
  export default Header