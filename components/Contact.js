import React from 'react'
import Social from './Social'

const Contact = () => {
    return (
        <div className="contact">
            <h2>You can contact me in my social networks, or Linkedin.</h2>
            <Social />
            <style jsx>{`
                div.contact{
                    padding:10px;
                }
                h2{
                    text-align:center;
                    font-size:18px;
                    margin-bottom:10px;
                }    
                div.contact :global(.social){
                    justify-content:space-evenly;
                }
            `}</style>
        </div>
    )
}

export default Contact
