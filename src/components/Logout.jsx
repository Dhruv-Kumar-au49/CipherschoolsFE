import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
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
        dispatch({type:'userlogin',payload:false});
        navigate('/'); // navigate to the homepage
      } else {
        window.alert('Oops...Something went wrong');
      }
    } catch (error) {
      console.error(error);
      window.alert('Oops...Something went wrong');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
