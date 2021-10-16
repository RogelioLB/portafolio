import React from 'react'
import { useProjects } from '../hooks/useProjects'
import Project from './Project';

const Projects = () => {
    const {projects,loaded} = useProjects();
    return (
        <div className="projects-container">
            {
                loaded && projects.map((project,id)=>(
                    <Project {...project} key={id}/>
                ))
            }
            <style jsx>{`
            div.projects-container{
                display:flex;
                gap:50px;
                justify-content:space-between;
                flex-direction:column;
                flex-wrap:wrap;
            }    
            @media (min-width:690px){
                div.projects-container{
                    flex-direction:row;
                }
            }
            `}</style>
        </div>
    )
}

export default Projects
