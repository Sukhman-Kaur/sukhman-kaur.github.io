import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';

export default function Projects() {   
    const [projects, setProjects] = useState([]);
    
    const user='Sukhman-Kaur';

    useEffect(()=>{
        fetch('https://api.github.com/users/'+user+'/repos')
        .then(response=>response.json())
        .then(setProjects);
    },[]);

//     function ImageComponent({ project }) {
//         const [data, setData] = useState(null);
//         const [error, setError] = useState(null);
//             const url=`https://raw.githubusercontent.com/${user}/${project.name}/${project.default_branch}/${project.name}.png`;
//         useEffect(()=>{
//             fetch({url})
//             .then(response=>response.json())
//             .then(setData)
//             .catch(setError);
//         }, [project]);
//         if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//     if(!data) return null;

//     if(data){
//         return(

//         <img alt="" className="card-img-top object-top d-none d-md-block" 
//                     src="https://miro.medium.com/max/875/1*stuRw7oDi8F8PC9GRNJnqA.jpeg" />
//          );
// }
//     }
    


    return (
        <div className="projects container-fluid section" name="projects">
            <Fade bottom>
                <h2 className="section-header">PROJECTS</h2>
            </Fade>
            <div className="section-body section-width top-bot-border-sm">
                
            {projects.map((project, index) => (
                <Fade bottom key={index}>
                <div target="_blank" rel="noopener noreferrer" className="card-wrapper">
                    <div className="card text-white background-dark-lg mb-3">
                    <img alt="" className="card-img-top object-top d-none d-md-block" 
                    src={`https://raw.githubusercontent.com/${user}/${project.name}/${project.default_branch}/${project.name}.png`}></img>
                    {/* <ImageComponent project={project}/> */}
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text remarks">
                                    {project.description}
                                </p>
                            </div>
                            <div className="label-wrapper">
                                {project.topics.map((tech, i) => (
                                    <span key={i} className="label"> {tech}</span>
                                ))}
                            </div>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" 
                            className={`card-link ${project.html_url ? "" : "disabled"}`}>Code</a>
                        </div>
                    </div>
                </div>
                </Fade>
            ))}
            </div>
                                    

        </div >
    )
}
