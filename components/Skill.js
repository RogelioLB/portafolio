import Card from "./Card"

const Skill = ({svg,title}) => {
    return (
        <div className="skill">
            <Card>
                <img src={svg.src} alt={title} className="image-skill" />
                <div className="title-skill">
                    <h3>{title}</h3>
                </div>
            </Card>
            <style jsx global>{`
                    div.skill :global(.card){
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                        width:150px;
                        height:150px;
                        box-shadow:0px 0px 5px rgba(0,0,0,.2);
                        border-radius:2px;
                    }

                    .image-skill{
                        object-fit:contain;
                        height:100%;
                        width:100%;
                    }
                    


                    @media (min-width:690px){
                        div.skill :global(.card){
                            height:200px;
                            width:200px;
                        }
                    }
            `}</style>
        </div>
    )
}

export default Skill
