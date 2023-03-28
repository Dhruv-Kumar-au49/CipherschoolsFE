import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Follower from './components/Follower';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login'
import Signup from './components/Signup';
import Logout from './components/Logout';

function App() {
  return (
    <div >
      <Router>
<Header/>
<Routes>
<Route exact path="/" element={<Homepage/>} />
<Route exact path="/login" element={<Login/>} />
<Route exact path="/Signup" element={<Signup/>} />
<Route exact path="/follower" element={<Follower/>} />
<Route exact path="/logout" element={<Logout/>} />
</Routes>

<Footer/>
      </Router>
    
    </div>
  );
}

export default App;
