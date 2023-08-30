import './index.css'

export default function CommentView({email, comment, date}){
    return(
        <div id="commentContainer">
            <div id='info'>
                <p id="email">{email}</p>
                <p id="date">{date}</p>
            </div>
            <p>{comment}</p>

        </div>
    )
    
}