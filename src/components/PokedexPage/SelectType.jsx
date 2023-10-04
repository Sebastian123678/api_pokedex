import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/SelectType.css'

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)

    useEffect (() => {
        getTypes()
    }, [])

    // console.log(types);

    const handleChange = e => {
        // Elemento al que le hago click
        setTypeSelected(e.target.value)
    }

    return (
        <div className="select">
            <select className="select_content" onChange={handleChange}>
                <option  className="select_option" value='allPokemons'>All pokemons</option>
                {
                    types?.results.map(typeInfo => (
                        <option  className="select_option" key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectType