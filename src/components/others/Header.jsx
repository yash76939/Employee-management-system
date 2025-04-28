import React from 'react'

const Header = ({data} ) => {
  const logOutUser = () =>{
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello<br/> <span className='text-3xl font-semibold'> {data.firstName} 👋</span></h1>
        <button onClick = {logOutUser} className='bg-amber-600 rounded-md py-3 px-5 text-2xl font-bold'>Log Out</button>
    </div>
  )
}

export default Header;