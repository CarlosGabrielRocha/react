import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useState } from "react";

export default function NewCommentForm({ addComment }) {

    const [ email, setEmail ] = useState('SeuEmail@gmail.com')
    const [ comment, setComment ] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComment(email, comment)
        setEmail(''); setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                labelText="Email:"
                type="email"
                id="email"
                value={email}
                setValue={setEmail} />
            <Textarea
                labelText="Comentário:"
                id="comment"
                value={comment}
                setValue={setComment}
            />
            <Button type="submit">Enviar Comentário</Button>
        </form>
    )
}