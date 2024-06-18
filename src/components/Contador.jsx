import { useState } from "react"


export const Contador = () => {

  const [contador, setContador] = useState(0);

  const sumar = () => {

    setContador( contador + 1 );

  }

  const restar = () => {

    setContador( contador - 1 );

  }

  const reset = () => {

    setContador( 0 );

  }

  return (
    <>
        <h1>Vamos a contar!</h1>
        <p>El numero de llevamos es: {contador}</p>
        <button onClick={sumar}>Sumar +1</button>
        <button onClick={restar}>Restar -1</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}