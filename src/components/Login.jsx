import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../Style/login.css';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ciphershools.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const status = response.status;

      if (status === 200 ) {
        window.alert('successfully logged');
        dispatch({type:'userlogin',payload:true});
        navigate("/follower");
      } else {
        window.alert('Login failed!');
      }
    } catch (error) {
      console.log('Error occurred in login:', error);
      window.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button className="login-submit-btn" type="submit">
              Login
            </button>
           
          </form>
          <div className="signup">
            Don't have an account yet? <Link to="/signup">Click here to sign up.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
