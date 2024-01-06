import ProjectCard from "../ProjectCard"
import "./index.css"


const Project =(props)=>{
    const {projectslist}=props
    
    return <div className="Projectscontainer" id="myProjects">
        <h1>Projects</h1>
        <ul className="projectul">
            {projectslist.map((eachproject)=><ProjectCard eachproject={eachproject}/>)}
        </ul>
    </div>
}



export default Project