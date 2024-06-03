import { onValue, ref } from 'firebase/database'
import { database } from './utils/firebase-config'
import { useState, useEffect } from 'react'
import { Home } from './pages/Home'

export interface ComposterData {
  distancia: number
  id: number
  nome: string
  temperatura: number
  umidade: number
}

export function App() {
  const [composterData, setComposterData] = useState({} as ComposterData)

  useEffect(() => {
    const composterDataRef = ref(database, 'composteiras/composteira1')
    const unsubscribe = onValue(composterDataRef, (snapshot) => {
      const data = snapshot.val()
      console.log(data)

      setComposterData(data)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <Home
        temperatura={composterData.temperatura}
        umidade={composterData.umidade}
        distancia={
          composterData.distancia
            ? Number(composterData.distancia.toFixed(2))
            : 0
        }
        nome={composterData.nome}
        id={composterData.id}
      />
    </div>
  )
}
