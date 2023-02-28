import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState(0.0)
  const [peso, setPeso] = useState(0)
  const calcImc = () => {
    return (peso / (altura * altura))
  }
  let imc = calcImc().toFixed(2)
  if (imc === 'NaN') {
    imc = ''
  }

  let classificationValue = ''
  if (calcImc() < 18.50) {
    classificationValue = 'Magreza - Grau de obesidade 0'
  } else if (calcImc() >= 18.50 && calcImc() <= 24.99) {
    classificationValue = 'Normal - Grau de obesidade 0'
  } else if (calcImc() >= 25 && calcImc() <= 29.99) {
    classificationValue = 'Sobrepeso - Grau de obesidade 1'
  } else if (calcImc() >= 30 && calcImc() <= 39.99) {
    classificationValue = 'Obesidade- Grau de obesidade 2'
  } else if (calcImc() > 40) {
    classificationValue = 'Obesidade Grave - Grau de obesidade 3'
  }

  return (
    <div className='form'>
      <h1 className='form--title'>Calculadora de IMC</h1>
      <form className='formElement'>
        <div className='formElement__items'>
          <label className='formElement--label' htmlFor="altura">Altura:</label>
          <input className='formElement--input' type="number" id='altura' onBlur={(e) => setAltura(e.target.value)}/> 
        </div>
        <div className='formElement__items'>
          <label className='formElement--label' htmlFor="peso">Peso:</label>
          <input className='formElement--input' type="number" id='peso' onBlur={(e) => setPeso(e.target.value)}/> 
        </div>
      </form>
      <div>
        <h2>Resultado:</h2>
        <p>{ classificationValue }</p>
        <p>{ imc }</p>
      </div>
    </div>
  )
}

export default App
