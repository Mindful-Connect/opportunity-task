import { Outlet } from 'react-router'
import { NavLink } from 'react-router'
import happlyLogo from '/happly_logo.svg'

function App() {
  return (
    <>
      <div className='navbar'>
        <img src={happlyLogo} className='logo' alt='Vite logo' />

        <div>
          <p>Happly Front End Task</p>
          <div className='navlinks'>
            <NavLink to='/'>🏠</NavLink>
            <NavLink to='/form'>Form</NavLink>
            <NavLink to='/list'>List</NavLink>
          </div>
        </div>
      </div>

      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App
