import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Navigation from './Components/Routes/Navigation/Navigation';
import Home from './Components/Routes/Home-Route/Home';


const App = () => {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<h1>Shop</h1>} />
        </Route>
    </Routes>
    </>
  )

}

export default App;
