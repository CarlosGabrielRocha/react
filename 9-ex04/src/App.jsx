import { useState } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import styles from './styles/App.module.css'

function App() {
  const [password, setPassword] = useState()
  const [copyBtnText, setCopyBtnText] = useState('Copiar')
  
  function handlePasswordGeneration() {
    let characters = '1234567890%$#@!¨&_-aqwertyuiosdfghjklçzxcvbnm|QWERTYUIOPASDFGHJKLÇZXCVBNM'
    const length = 12
    let newPassword = ""
    for (let index = 0; index < length; index++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }

    setPassword((currentState) => currentState = newPassword)
    setCopyBtnText('copiar')
  }

  function handlePasswordCopying() {
    navigator.clipboard.writeText(password)
    setCopyBtnText('copiado!')
  }

  return (
      <div className={styles.wrapper}>
        <Title id="test">Gerador de Senhas</Title>
        <div className={styles.buttons}>
          <Button onClick={handlePasswordGeneration}>Gerar</Button>
          <Button onClick={() => handlePasswordCopying()}>{copyBtnText}</Button>
        </div>
        <span>{password}</span>
      </div>
  )
}

export default App
