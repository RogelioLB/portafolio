import Skill from './Skill'
import HTML from "../public/html.svg"
import CSS from "../public/css.svg"
import JS from "../public/js.svg"
import NodeJs from "../public/nodejs-icon.svg"
import Next from "../public/nextjs-2.svg"
import ReactJS from "../public/react-2.svg"
import Mongo from "../public/mongodb-icon-1.svg"

const SkillsContainer = () => {
    return (
        <div className="skills-container">
            <Skill title="HTML" svg={HTML}/>
            <Skill title="CSS" svg={CSS} />
            <Skill title="JavaScript" svg={JS}/>
            <Skill title="NodeJS" svg={NodeJs}/>
            <Skill title="NextJS" svg={Next}/>
            <Skill title="React" svg={ReactJS} />
            <Skill title="MongoDB" svg={Mongo} />
            <style jsx>{`
            div.skills-container{
                display:flex;
                gap:20px;
                flex-wrap:wrap;
                justify-content:space-evenly;
            }    
            `}</style>
        </div>
    )
}

export default SkillsContainer
