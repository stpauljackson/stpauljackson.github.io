import './name.css'
import img from '../kali.png'

export default function Name() {
    return(
        <div className="name">
            {/* <img style={{position: 'absolute',top:"100px",left:"100px",width:"100px"}} src={img} alt=""/> */}
            <div className="namecontainer">
            <h1 style={{fontSize:"9vw"}}>Sushant Kumar</h1>
            <h2 style={{fontSize:"3vw"}}>Software Engineer</h2>
            </div>
        </div>
    )
}