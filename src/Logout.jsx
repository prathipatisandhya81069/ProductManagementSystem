import React from 'react'

const Logout = () => {
    function handleClick(){
         localStorage.clear("user");
    }
  return (
    <div>
        <button onClick={handleClick}>
            Logout
        </button>
    </div>
  )
}

export default Logout