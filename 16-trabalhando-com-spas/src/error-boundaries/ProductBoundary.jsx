import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError() // Retorna o erro de rota mais próximo desse contexto

  if (isRouteErrorResponse(error)) { // Verifica se é um erro de resposta.
    // Você pode retornar componentes mais elaborados, como uma página inteira pra erro.
    switch(error.status) {
    case 404:
      return <h2>Oops... Produto não encontrado!</h2> 
    case 401:
      return <h2>Você não está autorizado a ver essa página!</h2>
    case 400:
      return <h2>Parece que algo deu errado na requisição!</h2>
    case 500:
      return <h2>Erro intern do servidor!</h2>
    }
  }

  return <h2>Algo deu errado!</h2> // Erro genérico
}

