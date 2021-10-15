import { useEffect } from "react"
export const useFocus = (refs) =>{
    const focus = (sections) =>{
        let current = null;
        Array.from(sections).some((section)=>{
            const sectionTop = section.offsetTop;
            const id = section.getAttribute("id")
            if(sectionTop >= scrollY){
                current = id
                return true;
            }
        })
        refs.forEach((a) => {
            a.current.classList.toggle("active",a.current.classList.contains(current));
        });
    }

    useEffect(()=>{
        refs.forEach(link=>{
            link.current.addEventListener("click",()=>{
                for(let i=0; i < refs.length; i++) {
                    refs[i].current.classList.remove("active");
                }
                link.current.classList.add("active");
            })
        })

        const sections = document.querySelectorAll("section");
        focus(sections);
        window.addEventListener("scroll", () => {
            focus(sections);
        });
    },[])
}