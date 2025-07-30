import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Chamando a API!")

    return () => {
      console.log("Chamada encerrada!")
    }
  }, []) // O efeito colateral é ativado na primeira renderização do component, após isso só depois da modificação de alguma dependência. Sem o [] ele é executado a cada renderização mas normalmente não queremos esse comportamento.

  return (
    <button onClick={() => setCounter(state => state + 1)}>
      Contador: {counter}
    </button>
  )

}

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Conhecendo o useEffect</h1>
      <div>
        <input 
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow(state => !state)}
        />
        <label htmlFor="show">Exibir</label>
      </div>
      { show ? <Counter /> : null}
      <hr />
    </>
  )
}
