import { useState } from "react"

export default function UseComments() {
    const [comments, setComments] = useState(() => {
        const storageComments = JSON.parse(window.localStorage.getItem('ex05-comments'))
        if (!storageComments) return []
        return storageComments
    })

    const addComment = (email, comment) => {
        const id = Math.floor(Math.random() * 1000000)
        const commentDate = new Date().toLocaleString('pt-br')
        const newComment = { id, email, comment, commentDate }
        
        setComments(state => {
            const newArray = [newComment, ...state]
            window.localStorage.setItem('ex05-comments', JSON.stringify(newArray))
            return newArray
        })

        setComments(state => {
            console.log(state)
            return state
        })
    }

    const removeComment = (id) => {
        setComments(state => {
            const newArray = state.filter(comment => comment.id !== id)
            window.localStorage.setItem('ex05-comments', JSON.stringify(newArray))
            return newArray
        })
    }

    return { comments, addComment, removeComment }
}