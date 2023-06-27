import Header from './components/Header'
import Main from './components/Main'
import React,{ useState,useEffect } from "react";
import './App.css'

function App() {
  const [windowsize,setWindow] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setWindow(window.innerWidth > 950);
      console.log(windowsize)
    };

    handleResize()
    window.addEventListener("resize", handleResize);
  }, [windowsize]);

  return (
    <>
      <Header windowsize={windowsize}/>
      <Main windowsize={windowsize}/>
    </>
  )
}

export default App
