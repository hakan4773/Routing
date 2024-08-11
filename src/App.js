import './App.css';
import { BrowserRouter as Router, Route, NavLink , Routes ,
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>  {/*Sayfalar  */}
      <div>
        <nav>
          <ul>
            <li>
              <NavLink  end   className={({ isActive }) => (isActive ? 'active-link' : '')}
                 to="/home">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink     className={({ isActive }) => (isActive ? 'active-link' : '')}
               to="/about">Hakkında</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? 'active-link' : '')}
               to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes> 

           <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        
          <Route path="users" element={<Users />}> {/* Users içideki Userlarda gezinmek için  */}
            <Route path=":id" element={<User />} />
          </Route>     

          <Route path="*" element={<Error404 />} />{/* Sayfa bulunamazsa hata döndürür */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
