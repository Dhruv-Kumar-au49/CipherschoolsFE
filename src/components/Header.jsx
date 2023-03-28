import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../Style/header.css';
import '../Style/logout.css';

function Header() {
  const { isLogin } = useSelector((state) => state.first);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try {
      const response = await fetch('https://ciphershools.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
      });

      const status = response.status;

      if (status === 200) {
        window.alert('Logout successful');
        dispatch({ type: 'userlogin', payload: false });
        navigate("/");
      } else {
        window.alert('Oops...Something went wrong');
      }
    } catch (error) {
      console.error(error);
      window.alert('Oops...Something went wrong');
    }
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <img
          src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png'
          className='logo'
          alt='logo'
        />
        <h1 className='heading'>Cipherschools</h1>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Follower'>Follower</Link>
        </li>
        {isLogin ? (
          <li>
          <button className='logout-button' onClick={handleLogout}>
            Logout
          </button>
        </li>
        ) : (
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
