import {useEffect,useState} from 'react';
import Descripcion from './components/Descripcion.js';
import Bar from './components/Bar.js';
import DatePlace from './components/DatePlace.js';
import Schedule from './components/Schedule.js';
import Expositores from './components/Expositores.js';
import Contacto from './components/Contacto.js';
import Footer from './components/Footer.js';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './App.css';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <>
      { scrollPosition > 200 &&
      <div className='backtotop'>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }} />
        </Fab>
      </div>
      }
      <Bar/>
      <Descripcion/>
      <DatePlace/>
      <Schedule/>
      <Expositores/>
      <Footer/>
      <Contacto/>
    </> 
  );
}

export default App;
