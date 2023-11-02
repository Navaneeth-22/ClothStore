import { lazy,Suspense } from 'react';
import {Routes, Route} from 'react-router-dom';
// import Navigation from './Routes/Navigation/Navigation';
// import Home from './Routes/Home-Route/Home';
// import AuthComponent from './Routes/Authentication/AuthComponent';
// import Shop from './Routes/Shop/ShopComponent';
// import Checkout from './Routes/Checkout/CheckOut';

const Home = lazy(() => import('./Routes/Home-Route/Home'));
const AuthComponent = lazy(() => import('./Routes/Authentication/AuthComponent'));
const Shop = lazy(() => import('./Routes/Shop/ShopComponent'));
const Checkout = lazy(() => import('./Routes/Checkout/CheckOut'));
const Navigation = lazy(() => import('./Routes/Navigation/Navigation'));

const App = () => {
  
  return (
    <Suspense>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<AuthComponent />} />
        <Route path='/shop/*' element={<Shop/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
    </Suspense>
  )

}

export default App;
