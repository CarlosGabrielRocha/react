
// Esse é um exemplo de um componente controlado.

// De acordo com a documentação do react:

// Componente controlado = o estado é gerenciado por um componente pai
// Componente não controlado = gerencia o seu próprio estado.

export default function TextInput({ id, value, setValue, label }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

