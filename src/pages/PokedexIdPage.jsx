import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react";
import '../components/PokedexIdPage/style/PokedexIdPage.css'

const PokedexIdPage = () => {

    const { id } = useParams() // Capturar el id de la url

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const [ pokemon, getPokemon ] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])

    //console.log(pokemon);
    const firstType = pokemon?.types[0].type.name 

    return (
        <div>
            <img className="pokedex_img" src="../../public/Group 216.png" alt="pokedex design" />
            <img className="pokedex_text" src="../../public/image 12.png" alt="Pokedex" />

            <div className={`pokeId pokeCard_header ${firstType}-gradient`}>
                <div className="pokeID_content_info">
                <img className="pokeId_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                <p className="pokeId_id"># {pokemon?.id}</p>
                <h2 className={`pokeId_name ${firstType}-name`}>{pokemon?.name}</h2>
                <ul className="pokeId_characteristics">
                    <li className="pokeId_height">
                        <span className="pokeId_height_name">Height</span>
                        <span className="pokeId_height_value">{pokemon?.height}</span>
                    </li>
                    <li className="pokeId_weight">
                        <span className="pokeId_weight_name">Weight</span>
                        <span className="pokeId_weight_value">{pokemon?.weight}</span>
                    </li>
                </ul>
                <div className="pokeID_type_abilities">
                    <div className="pokeID_content_type">
                        <h3 className="pokeId_type_name">Type</h3>
                        <ul className="pokeId_list_type">
                            {
                                pokemon?.types.map(typeInfo => (
                                    <li className={`pokeId_type ${firstType}-gradient`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="pokeID_content_abilities">
                        <h3 className="pokeId_abilitie_name">Abilities</h3>
                        <ul className="pokeId_list_abilities">
                            {
                                pokemon?.abilities.map(ability => (
                                    <li className={`pokeId_abilitie ${firstType}-gradient`} key={ability.ability.url}>{ability.ability.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="pokeId_content_stats">
                    <h3 className="pokeId_stats_name">Stats</h3>
                    <ul className="pokeId_list_stats">
                        {
                            pokemon?.stats.map(stat => (
                                <li  className="pokeId_stat" key={stat.stat.url}>
                                    <div className="pokeId_stat_info">
                                        <span className="pokeId_stat_name">{stat.stat.name}</span>
                                        <span>{stat.base_stat} / 255</span>
                                    </div>
                                    
                                    <div className="pokeId_stat_contend">
                                        <div
                                            className="pokeId_stat_base"
                                            style={{
                                                maxWidth:`${(stat.base_stat / 255) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                </div>

                <div className="pokeId_content_movements">
                    <h3 className="pokeId_movements_name">Movements</h3>
                    <ul className="pokeId_movements_list">
                        {
                            pokemon?.moves.map(movement => (
                                <li className="pokeId_movement_value" key={movement.move.url}> {movement.move.name} </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default PokedexIdPage