import './skill.css';

import Card from '../components/Card';

import cpp from '../assets/cpp.svg'
import javascript from '../assets/javascript.svg'
import python from '../assets/python.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import mysql from '../assets/mysql.svg'
import mongodb from '../assets/mongodb.svg'
import tensorflow from '../assets/tensorflow.svg'
import redux from '../assets/redux.svg'

export default function Skill(props)
{
    
    return(
        <div>
        {(props.index >=3)?
        <div className="skill">
            <div className="title">
                <h1>Skills</h1>
                <p>FullStack Development &bull; Software Engineering &bull; Machine Learning</p>
            </div>
            <div className="skillcontainer">
                <div className="skillgroup g1">
                    <Card src={mongodb} name="MongoDB"/>
                </div>
                <div className="skillgroup g2">
                    <Card src={redux} name="Redux"/>
                    <Card src={cpp} name="C++"/>
                </div>
                <div className="skillgroup g3">
                    <Card src={nodejs} name="Node js"/>
                    <Card src={javascript} name="Javascript"/>
                    <Card src={react} name="React js"/>
                </div>
                <div className="skillgroup g4">

                    <Card src={python} name="Python"/>
                    <Card src={tensorflow} name="TensorFlow"/>
                </div>
                <div className="skillgroup g5">
                    <Card src={mysql} name="mySQL"/>
                </div>
            </div>
        </div>:
        <div className="skill"></div>
        }
        </div>
    )
}