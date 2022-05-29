import './App.css';
import { useState,useRef,useEffect } from 'react'; 

import Project from './screen/project.js'
import Name from './screen/name.js'
import About from './screen/about.js'
import Skill from './screen/skill.js'
import Contact from './screen/contact.js'
import Image from './screen/image';

export default function App() {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [vh,setvh] = useState(0);
  const [currentScrollY,setcurrent] = useState(0)
  const [index,setindex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setcurrent(window.scrollY);
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setindex(Math.floor(currentScrollY/(vh+vh/2))-1)
    };

    window.addEventListener("scroll", handleScroll, { passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(()=>{
    setvh(Math.round(window.document.documentElement.clientHeight))
  },[])

  return (
    <div className="App">
      <Name/>
      <About position={currentScrollY}/>
      <Project  index={index} />
      <Image position={currentScrollY}/>
      <Skill index={index}/>
      <Contact />
    </div>      
  )
}

