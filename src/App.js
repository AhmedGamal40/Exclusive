import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer'
import MiniNavbar from './Components/Common/MiniNavbar';
import { BrowserRouter } from 'react-router-dom';
import Index from './Routes';
function App() {
  return (
    <BrowserRouter>
      <MiniNavbar/>
      <Navbar/>
      <div className='container mx-auto'>
        <Index />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
