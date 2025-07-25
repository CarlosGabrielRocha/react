import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setTitle("")
        setCover("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" value={title} setValue={setTitle} label="Título: " />
            <TextInput id="cover" value={cover} setValue={setCover} label="Capa: " />
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}

