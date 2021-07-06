import React, {useEffect} from 'react';
import AnimatedCursor from "react-animated-cursor"
import Main from './pages/main';


import 'bootstrap/dist/css/bootstrap.min.css';
import HashLoader from "react-spinners/HashLoader";

function App() {

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div id="app">{
        loading ?  

        <div id="loader">
           <HashLoader color={"#4A90E2"} loading={loading}  size={150} />
        </div>

        :
        <>
        <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color='32, 190, 234'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
          <Main/>
        </>
        }
        </div>
  );
}

export default App;
