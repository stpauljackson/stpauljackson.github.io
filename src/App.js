import React from 'react'
import Home from './Home';
import Mobile from './mobile';

const isMobile = window.matchMedia("(max-width: 1024px)").matches;

export default function App() {
  return (
    <div>
        { isMobile? <Mobile /> : <Home/>}
    </div>
  )
}
