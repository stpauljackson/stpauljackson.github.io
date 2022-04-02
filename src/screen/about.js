import './about.css'

export default function About(props){

    const h1 = {
        transform: "translateX("+props.position*0.7+"px)"
    }
    const p = -1*(props.position-1600)
    return(
        <div id="about">
            <h1 style={h1}>Who Am I?</h1>
            <p style={{transform: "translateX("+p*0.9+"px)"}}>
                A geek with awesome personality and skills.
            </p>
            <p style={{transform: "translateX("+p*0.7+"px)"}}>
                An adventurer who love challenges and live for it.
            </p>
            <p style={{transform: "translateX("+p*0.5+"px)"}}>
                A Web Developer who builds awesome websites like this.
            </p>
        </div>
    )
}