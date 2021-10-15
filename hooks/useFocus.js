import { useEffect } from "react"
export const useFocus = (refs) =>{
    useEffect(()=>{
        refs.forEach(link=>{
            link.current.addEventListener("click",()=>{
                for(let i=0; i < refs.length; i++) {
                    refs[i].current.classList.remove("active");
                }
                link.current.classList.add("active");
            })
        })
    },[])
}