import { useRouteError } from "react-router-dom";

export default function DefaultBoundary() {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops.. Parece que algo deu errado</h1>
      <p>{error.message}</p>
    </div>
  )
}