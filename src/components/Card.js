import './card.css'
export default function Card(props){
   
    return(
        <div className='skillcard'>
            <img src={props.src} alt='' />
            <h1>{props.name}</h1>
        </div>
    );
}

