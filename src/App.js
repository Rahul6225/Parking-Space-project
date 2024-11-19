import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ParkingSpace/>
      <Wallet/>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Footer/> */}
    </div>
  );
}
export default App;
