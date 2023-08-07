import { useCountStore } from './store/couterStore'
import { useEffect } from 'react'

const App = () => {

  const { decrement, increment, getPokemon } = useCountStore()
  const { count, pokemon } = useCountStore()

  useEffect(() => {

    getPokemon(count)

  }, [count, getPokemon])

  return (
    <div className=''>
      <img style={{
        margin: "0 auto",
        display: "block",
        width: "150px"
      }} src={pokemon?.sprites.front_default} alt="" />
      <div className="flex">
        <button onClick={() => decrement(1)}> -1 </button>
        <h1> Pokemon: {count} </h1>
        <button onClick={() => increment(1)}> +1 </button>
      </div>
    </div>
  )
}

export default App