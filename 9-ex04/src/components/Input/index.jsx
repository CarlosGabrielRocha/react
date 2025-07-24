// Biblioteca para trabalhar com tipos das props do react caso o eslint acuse um erro.
import PropTypes from "prop-types"

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func
}

export default function Input(props) {
    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(+ev.target.value)}
        />
    )
}

