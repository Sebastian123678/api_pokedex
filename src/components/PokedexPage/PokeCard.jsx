import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon(url)
  }, [])

  //console.log(pokemon);

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  const firstType = pokemon?.types[0].type.name 

  return (
    <article className={`pokeCard ${firstType}-border`} onClick={handleNavigate}>
        <header className={`pokeCard_header ${firstType}-gradient`}>
            <img className="pokeCard_image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="pokeCard_body">
            <h3 className={`pokeCard_name ${firstType}-name`}>{pokemon?.name}</h3>
            <ul className="pokeCard_types">
                {
                    pokemon?.types.map(typeInfo => (
                        <li className="pokeCard_typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="pokeCard_hr"/>
            <ul className="pokeCard_stats">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="pokeCard_stat" key={statInfo.stat.url}>
                            <span className="pokeCard_stat_name">{statInfo.stat.name}</span>
                            <span className={`pokeCard_stat_value ${firstType}-value`}>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard