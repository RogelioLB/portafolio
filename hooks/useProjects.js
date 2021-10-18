import { useEffect, useState } from "react";

export const useProjects = () =>{
    const [projects,setProjects] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        fetch("/api/projects").then(res=>res.json()).then(res=>{
            setProjects(res);
            setLoaded(true);
        })
    },[]);

    return {projects,loaded};
}