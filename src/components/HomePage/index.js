import {Component} from "react"
import Header  from "../Header"
import Project from "../Projects"
import ContactPage from "../ContactsPage"
import "./index.css"

class Homepage extends Component{
state={projectname:"" ,projectlink:"" ,projectdescriptio:"",projectslist:[{projectname:"Project Name",projectlink:"https://imagetolink.com/ib/D8R0WAWWOx.png",projectdescriptio:"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."},{projectname:"Project Name",projectlink:"https://imagetolink.com/ib/V3zYCBvqlb.png",projectdescriptio:"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."},{projectname:"Project Name",projectlink:"https://imagetolink.com/ib/d0EgWHTGxy.png",projectdescriptio:"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}] }

addproject=(event)=>{
    event.preventDefault()
    const {projectlink,projectname,projectdescriptio}=this.state
    const mydata={
        projectname,projectlink,projectdescriptio
    }
    this.setState((prevState)=>({projectslist:[...prevState.projectslist,mydata]}))
}


getprojectname=(event)=>{
    this.setState({projectname:event.target.value})
}

getprojectlink=(event)=>{
    this.setState({projectlink:event.target.value})
}

getprojectdescription=(event)=>{
    this.setState({projectdescriptio:event.target.value})
}

    render(){
         const {projectlink,projectname,projectdescriptio,projectslist}=this.state
        return  (<div className="bgcontainer">
         <Header/>
                       <div className="headersection">
    
                 <div className="hedingimgcontainer">
       <div>
         <h1 className="uiuxsty">UI/UX DESIGNER</h1>
         <h1>Hello, my name is Madelyn Torff</h1>
         <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
         <div className="buttonscontainer">
            <button type="button" className="projectbutton"><a href="#myProjects" className="optiosty">Projects</a></button>
            <button type="button" className="linkeinbutton">LinkedIn</button>
         </div>
       </div>
       <img src="https://fincity-assignment.vercel.app/_next/image?url=%2Fbanner-img.png&w=750&q=75" alt=" Madelyn Torff" className="imgpxiling"/>
    </div>

    <div className="addprojectscontainer">
        <h1 className="addproheading">Add Project</h1>
        <form onSubmit={this.addproject}>
            <div className="inputcontainer">
                <label htmlFor="projectname" >Project Name</label>
                <br/>
                <input type="text" id="projectname" value={projectname}  className="inputele" onChange={this.getprojectname}/>
            </div>
            <div className="inputcontainer">
                <label htmlFor="projectlink" >Project Link</label>
                <br/>
                <input type="text" className="inputele" id="projectlink" value={projectlink} onChange={this.getprojectlink}/>
            </div>
            <div className="inputcontainer">
                <label htmlFor="projectdescription" >Project Description</label>
                <br/>
                <textarea  id="projectdescription" value={projectdescriptio} className="inputdesele" onChange={this.getprojectdescription}/>
            </div>
            <div className="addbuttoncont">
            <button type="submit" className="addbutton" >Add</button>
        </div>
        </form>
        
    </div>
   
</div>
 <Project projectslist={projectslist}/>
 <ContactPage/>
</div>)
            

       
         
}
}

export default Homepage