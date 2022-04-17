import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import NotFound from './Components/NotFound/NotFound';
import RequreAuth from './Components/RequireAuth/RequreAuth';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/checkout'
          element={
            <RequreAuth>
              <CheckOut></CheckOut>
            </RequreAuth>
          }></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
