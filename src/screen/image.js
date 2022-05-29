import { useState, useRef, useEffect } from 'react';
import Phone from '../assets/phone.png'
import './image.css'

export default function Image() {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [vh, setvh] = useState(0);
  const [currentScrollY, setcurrent] = useState(0)
  const [index, setindex] = useState(-1);

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
      setindex(Math.floor(currentScrollY / vh) - 2)
      console.log(currentScrollY)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setvh(Math.round(window.document.documentElement.clientHeight))
  }, [])

  const img1 = {
    transform: `translateY(${-currentScrollY + currentScrollY * 0.4 + 1200}px)`,
    right: '15px'
  }
  const img2 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 2600}px)`,
    right: '500px'
  }
  const img3 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 1.5 + 2700}px)`,
    right: '500px'
  }
  const img4 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 3400}px)`,
    right: '65px'
  }
  const img5 = {
    transform: `translateY(${-currentScrollY + currentScrollY * 0.4 + 4000}px)`,
    right: '15px'
  }
  const img6 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 6400}px)`,
    right: '500px'
  }
  const img7 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 1.5 + 4400}px)`,
    right: '500px'
  }
  const img8 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 5200}px)`,
    right: '65px'
  }
  const img9 = {
    transform: `translateY(${-currentScrollY + currentScrollY * 0.4 + 5800}px)`,
    right: '15px'
  }
  const img10 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 8600}px)`,
    right: '500px'
  }
  const img11= {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 1.5 + 8000}px)`,
    right: '500px'
  }
  const img12 = {
    transform: `translateY(${(-currentScrollY + currentScrollY * 0.4) * 2 + 9700}px)`,
    right: '65px'
  }
  return (
    <div className="filler">
      <img style={img1} id='phone1' src={Phone} />
      <img style={img2} id='phone2' src={Phone} />
      <img style={img3} id='phone1' src={Phone} />
      <img style={img4} id='phone2' src={Phone} />
      <img style={img5} id='phone1' src={Phone} />
      <img style={img6} id='phone2' src={Phone} />
      <img style={img7} id='phone1' src={Phone} />
      <img style={img8} id='phone2' src={Phone} />
      <img style={img9} id='phone1' src={Phone} />
      <img style={img10} id='phone2' src={Phone} />
      <img style={img11} id='phone1' src={Phone} />
      <img style={img12} id='phone2' src={Phone} />
    </div>
  )
}
