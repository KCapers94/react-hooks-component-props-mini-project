import React from "react"


function Article({title, date, preview, id}) {
    
    const defaultDate = "January 1, 1970" 
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article 