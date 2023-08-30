import { useState } from "react"
import "./index.css"



export default function CommentForm({addComment, comments}){

    const[email, setEmail] = useState("")
    const[comment, setComment] = useState("")


    function handleSubmit(ev){
        ev.preventDefault()
        if(email != ""){
            addComment({email, comment})
        }else{
            alert("ALERT: email required")
        }
        setEmail("")
        setComment("")
    }
  
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="formComp">
                    <label htmlFor="emailInp">Email:</label>
                    <input 
                        type="email" 
                        name="emailInp" 
                        id="emailInp" 
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        />
                </div>
                <div className="formComp">
                    <label htmlFor="comment">Comment:</label>
                    <textarea 
                        name="commentTxt" 
                        id="commentTxt" 
                        cols="30" 
                        rows="5"
                        value={comment}
                        onChange={(ev) => setComment(ev.target.value)}
                    ></textarea>
                </div>
                <input type="submit" id="submitInp"/>
            </form>   
        </>
 

    )
    
}