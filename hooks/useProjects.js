import { useEffect, useState } from "react";

export const useProjects = () =>{
    const [projects,setProjects] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://rogelio-lopez.herokuapp.com/proyectos").then(res=>res.json()).then(res=>{
            setProjects(res);
            setLoaded(true);
        })
    },[]);

    return {projects,loaded};
}