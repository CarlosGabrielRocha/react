import { useState } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import styles from './styles/App.module.css'
import Input from './components/Input'

function App() {
  const [password, setPassword] = useState()
  const [copyBtnText, setCopyBtnText] = useState('Copiar')
  const [customSize, setCustomSize] = useState('12')
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function handlePasswordGeneration() {
    let characters = '1234567890%$#@!¨&_-aqwertyuiosdfghjklçzxcvbnm|QWERTYUIOPASDFGHJKLÇZXCVBNM'
    let newPassword = ""
    for (let index = 0; index < passwordSize; index++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }

    setPassword(newPassword)
    setCopyBtnText('copiar')
  }

  function handlePasswordCopying() {
    navigator.clipboard.writeText(password)
    setCopyBtnText('copiado!')
  }

  let boolean = true

  if (boolean) return <h1>Test</h1>

  return (
      <div className={styles.wrapper}>
        <Title id="test">Gerador de Senhas</Title>
        <div>
          <label htmlFor="showInput">Customizar tamanho:</label>
          <input 
          type="checkbox" 
          id="showInput" 
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
          />
        </div>
{/*         {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho da Senha</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>
        ) : null} */}

        {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho da Senha</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>
        )} 

        <div className={styles.buttons}>
          <Button onClick={handlePasswordGeneration}>Gerar senha de {passwordSize} caracteres</Button>
          <Button onClick={() => handlePasswordCopying()}>{copyBtnText}</Button>
        </div>
        <span>{password}</span>
      </div>
  )
}

export default App
