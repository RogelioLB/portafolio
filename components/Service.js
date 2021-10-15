import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from './Card'

const Service = ({title,icon,children}) => {
    return (
        <Card>
            <h3>{title}</h3>
            <div className="icon-container">
                <FontAwesomeIcon icon={icon} size="3x" style={{boxSizing:"content-box",backgroundColor:"var(--blue)",color:"var(--white)",width:"48px",height:"48px",padding:"10px",borderRadius:"50%"}}/>
            </div>
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                h3{
                    font-size:24px;
                }
                .icon-container{
                    margin:20px 0;
                    display:flex;
                    justify-content:center;
                    align-center:center;
                }
                div.container{

                }
            `}</style>
        </Card>
    )
}

export default Service
