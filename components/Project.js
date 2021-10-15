import React from 'react'
const Project = ({title,description,image,tags}) => {
    return (
        <div className="project">
            <img src={image} alt={title}/>
            <div className="project-body">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map((tag,id)=>(
                        <h4 key={id}>{tag}</h4>
                    ))}
                </div>
            </div>
            <style jsx>{`
            img{
                max-width:100%;
                width:100%;
                height:250px;
                object-fit:cover;
            }
            div.project{
                width:100%;
            }
            div.project-body{
                padding:10px;
            }
            div.project-body h2{
                font-size:clamp(24px,3.5vw,28px);
            }
            div.project-body p{
                font-size:clamp(16px,2.5vw,22px);
            }
            div.project-tags{
                margin-top:10px;
                display:flex;
                gap:10px;
            }

            div.project-tags h4{
                padding:5px 10px;
                border-radius:15px;
                color:var(--white);
                background-color:var(--blue-light);
            }
            `}</style>
        </div>
    )
}

export default Project
