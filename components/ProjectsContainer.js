import React from 'react'
import { useProjects } from '../hooks/useProjects'
import Project from './Project';

const Projects = () => {
    const {projects,loaded} = useProjects();
    return (
        <div className="projects-container">
            {
                loaded && projects.map((project,id)=>{
                    if(id===0)return(
                        <div className="absolute" key={id}>
                            <Project {...project}/>
                        </div>
                    )
                    else return (
                        <Project {...project} key={id}/>
                    )
                })
            }
            <style jsx>{`
            div.projects-container{
                display:flex;
                gap:30px;
                justify-content:space-between;
                flex-direction:column;
                flex-wrap:wrap;
            }   
            @media (min-width:690px){
                div.projects-container{
                    flex-direction:row;
                }
                div.absolute :global(img){
                    height:400px;
                    object-fit:contain;
                }
            }
            `}</style>
        </div>
    )
}

export default Projects
