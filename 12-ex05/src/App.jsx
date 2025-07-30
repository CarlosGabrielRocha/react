import NewCommentForm from "./components/NewCommentForm";
import Grouper from "./components/Grouper";
import UseComments from "./hooks/UseComments";

export default function App() {
  const { comments, removeComment, addComment } = UseComments()

  return (
    <div className="app">
      <h1>Sessão de comentários</h1>
      <NewCommentForm addComment={addComment} />
      {
        comments.length === 0
        ?
        <div style={{ width: "100%", textAlign: "center", borderTop: "1px solid #fff" }}>
          <p style={{ marginTop: "1rem" }}>Seja o primeiro a comentar!</p>
        </div>
        :
        <Grouper items={comments} removeFunction={removeComment} />
      }
    </div>
  )
}