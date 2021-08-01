import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlankScreen from './components/BlankScreen';
import Homepage from './components/Homepage';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

import HashLoader from "react-spinners/HashLoader";
import Fade from 'react-reveal/Fade';

import './assets/css/global.scss';

function App() {

  const [loading, setLoading] = React.useState(true);
  const [showHome, setShowHome] = React.useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  useEffect(()=>{
    if(!showHome){
      setTimeout(()=>{
        setShowHome(true);
      },5000)
    }
  },[setLoading])


  return (
    <div id="app">{
        loading ?  

        <div id="loader">
           <HashLoader color={"#ffffff"} loading={loading}  size={150} />
        </div>

        :
          <>
            <Fade top timeout={2000}>
                <BlankScreen className={showHome ? 'display-none' : ''}/>
            </Fade>
            {showHome && 
            <div className="outerContainer">
              <Homepage className={showHome ? 'display-none' : ''}/>
              <About/>
              <Education/>
              <Contact/>
             </div>
             }
          </>
        }
        </div>
  );
}

export default App;
