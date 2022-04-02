import './project.css'

export default function Project(props){
    const {index} = props;
    const list = [
        {
            name:"Portfolio",
            tech:"[React js]",
            description:"A portfolio website to showcase my skills.",
            platform:"Web"
        },
        {
            name:"News Website",
            tech:"[React js, Node js, NewsAPI]",
            description:"A News website to provide latest news feeds.",
            platform:"Web"
        },
        {
            name:"Fifto",
            tech:"[React js, Node js]",
            description:"An E-Commerce website for clothing and accessories.",
            platform:"Web"
        }
    ]
    return(
        <div className="projects">
        {(index>=0&&index<=2)?
            <div key={index} className="projectcontainer">
                <h1 id="projectindex">0{index+1}</h1>
                <h1 id="projectname">{list[index].name}</h1>
                <p id="projectdescription">{list[index].description}</p>
                <p id="projecttech">{list[index].tech}</p>
                <h1 id="projectplatform">{list[index].platform}</h1>
            </div>
            :
            <div></div>
        }
        </div>    
    )
}