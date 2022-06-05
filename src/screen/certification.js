import React from 'react'
import './certification.css'
import CertificateCard from '../components/CeritficateCard'
import DSA from '../assets/DSA.png'
import Problemsolving from '../assets/ProblemSolving.png'
import javascript from '../assets/JavaScript.png'
import python from '../assets/Python.png'

const certificates = [
    {
        flip:true,
        src:DSA,
        name:'Data Structure and Algorithm',
        color1:'orangered',
        color2:'gold',
        link:'https://media.geeksforgeeks.org/courses/certificates/ef6ec6751217f7c67daa8b5d6dda6005.pdf'
    },
    {
        flip:false,
        src:Problemsolving,
        name:'Problem Solving',
        color1:'aqua',
        color2:'lime',
        link:'https://www.hackerrank.com/certificates/bc9684bcd834'
    },
    {
        flip:true,
        src:javascript,
        name:'JavaScript',
        color1:'pink',//'lightblue',
        color2:'violet',//'royalblue',
        link:'https://www.sololearn.com/Certificate/1024-13606285/pdf/'
    },
    {
        flip:false,
        src:python,
        name:'Python',
        color1:'orange',
        color2:'yellow',
        link:'https://www.sololearn.com/Certificate/1073-13606285/pdf/'
    },

]

export default function Certification() {
  return (
    <div className="certification">
        <h1>Certifications</h1>
        <div className="certificationcontainer">
        {
            certificates.map(x=>(<CertificateCard color1={x.color1} 
                color2={x.color2} link={x.link} flip={x.flip} src={x.src} name={x.name} />))
        }
        </div>
    </div>
  )
}
