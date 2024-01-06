import "./index.css"


const ProjectCard =(props)=>{
    const {eachproject}=props
    const {projectdescriptio,projectlink,projectname}=eachproject
    
    return <li>
        <div className="projectlistcontiner">
        <img src={projectlink} className="projectimgsty" alt="yoga"/>
        <div className="pronamedescontainer">
            <h1>{projectname}</h1>
            <p>{projectdescriptio}</p>
            <button className="viewprojectbutton">View Project</button>
        </div>
        </div>
    </li>

}

export default ProjectCard