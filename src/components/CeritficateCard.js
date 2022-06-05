import './CertificateCard.css'
export default function Card(props) {

    return (
        <div>
            {
                (props.flip) ?
                    <div className='CerificateCard'>
                        <div className='CerificateCardimg'>
                            <img src={props.src} alt='' />
                        </div>
                        <div style={{background:`-webkit-linear-gradient(60deg,${props.color1},${props.color2})`}} className='CerificateCarddetails'>
                            <h1>{props.name}</h1>
                            <a href={props.link} target='_blank'>
                                <div className="view">View Certificate</div>
                            </a>    
                        </div>
                    </div>
                    :
                    <div className='CerificateCard'>
                        <div style={{background:`-webkit-linear-gradient(60deg,${props.color1},${props.color2})`}} className='CerificateCarddetails'>
                            <h1>{props.name}</h1>
                            <a href={props.link} target='_blank'>
                                <div className="view"> View Certificate</div>
                            </a>
                        </div>
                        <div className='CerificateCardimg'>   
                            <img src={props.src} alt='' />
                        </div>
                    </div>
            }
        </div>
    );
}

