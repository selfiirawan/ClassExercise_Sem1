import Comment from './Comment'

export default function Post(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>By {props.author}</p>
            <p>{props.content}</p>
            
            {props.comments.map((comment, index) => (
                <Comment key={index} text={comment} />
            ))}
        </div>
    )
}