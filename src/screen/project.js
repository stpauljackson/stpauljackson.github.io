import './project.css'


export default function Project(props){
    const {index} = props;
    const list = [
        {
            name:"HouseHunt",
            tech:"[ReactNative, Node js, MongoDB]",
            description:"Cross platform mobile App to list Property for rent.",
            platform:"Android & ios"
        },
        {
            name:"News App",
            tech:"[React js, Node js, NewsAPI]",
            description:"A News App to provide latest news feeds.",
            platform:"Android, ios & Web"
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