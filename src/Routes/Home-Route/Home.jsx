import { Outlet } from 'react-router-dom';
import Directory from '../../Components/Directory/Directory'
const Home = () =>{

  return (
    <>
        <Directory/>
        <Outlet/>
    </>
  );
}

export default Home;
