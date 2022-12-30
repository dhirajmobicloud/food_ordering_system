import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Hotel1 from './Components/Hotels/Hotel 1/Hotel1';
import Overview1 from './Components/Hotels/Hotel 1/Overview1';
import Reviews1 from './Components/Hotels/Hotel 1/Reviews1';
import Menu1 from './Components/Hotels/Hotel 1/Menu1';
import OrderPage from './Components/Hotels/Hotel 1/OrderPage';
import Hotel1Cart from './Components/Hotels/Hotel 1/Hotel1Cart';
import Hotel2 from './Components/Hotels/Hotel 2/Hotel2';
import Hotel3 from './Components/Hotels/Hotel 3/Hotel3';
import Hotel4 from './Components/Hotels/Hotel 4/Hotel4';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route  path='/' element={<Dashboard />} />
        <Route  path='/hotel_1' element={<Hotel1 />}>
          <Route  path='order1' element={<OrderPage />}/>
          <Route exact path='overview1' element={<Overview1 />} />
          <Route exact path='reviews1' element={<Reviews1 />} />
          <Route exact path='menu1' element={<Menu1 />} />
          <Route exact path='cart1' element={<Hotel1Cart/>}/>
        </Route>
        <Route exact path='/hotel_2' element={<Hotel2/>}/>
        <Route exact path='/hotel_3' element={<Hotel3/>}/>
        <Route exact path='/hotel_4' element={<Hotel4/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
