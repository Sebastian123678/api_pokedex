import { useDispatch, useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {
  
  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  //const totalPokemons = pokeFiltered.length // Saber cuantos pokemons me trae
  const [auxiliar, setAuxiliar] = useState(100)

  const trainer = useSelector(store => store.trainer) // Nombre de la pag de inicio
  // console.log(trainer);

  const inputSearch = useRef()
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${auxiliar}`
  const [auxiliarUrl, setAuxiliarUrl] = useState(url)
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(auxiliarUrl)
  useEffect(() => {
    if(typeSelected === 'allPokemons'){
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected, auxiliarUrl, auxiliar])
  //console.log(pokemons);

  // funcion de buscar (input)
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  // Funcion de filtrar por tipo de pokemons (select)
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <img className="pokedex_img" src="Group 216.png" alt="pokedex design" />
      <img className="pokedex_text" src="image 12.png" alt="Pokedex" />
        <p className="welcome">Welcome {trainer}</p>
        <div className="search">
          <form className="search_form" onSubmit={handleSearch}>
            <input className="search_input" ref={inputSearch} type="text" placeholder="Pokemon name"/>
            <button className="search_btn">Search</button>
          </form>
          <SelectType
            setTypeSelected={setTypeSelected}
          />
        </div>
        
        <div className="pokeCard_total">
            {
              pokeFiltered?.map(poke => (
                <PokeCard
                  key={poke.url}
                  url={poke.url}
                />
              ))
            }
        </div>
    </div>
  )
}

export default PokedexPage