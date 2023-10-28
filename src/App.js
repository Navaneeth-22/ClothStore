
import {Routes, Route} from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation';
import Home from './Routes/Home-Route/Home';
import AuthComponent from './Routes/Authentication/AuthComponent';
import Shop from './Routes/Shop/ShopComponent';
import Checkout from './Routes/Checkout/CheckOut';


const App = () => {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthComponent />} />
        <Route path='/shop/*' element={<Shop/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
    </>
  )

}

export default App;
