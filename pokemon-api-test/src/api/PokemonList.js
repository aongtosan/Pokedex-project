import react from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
function PokemonList(props){
    const [pokemon,setPokemon] = useState([])
    const [pokemonProf,setPokemonProf] = useState([])
    const [currentpage,setUrlPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevpage,setPrevUrlPage] = useState()
    const [nextpage,setNextUrlPage] = useState()
    const [loading,isLoading] = useState(true)
    useEffect(()=>{
        isLoading(true)
        let cancel
        axios.get(currentpage,{
            CancelToken : new axios.CancelToken(c=>cancel=c)
        }).then(res =>{
            isLoading(false)
            setPrevUrlPage(res.data.previous)
            setNextUrlPage(res.data.next)
            setPokemon(res.data.results.map(p=>p.name))
            setPokemonProf(res.data.results.map(p=>p.url))
        })
        return () => cancel()
    },[currentpage])
    if(loading) return(<div>Loading....</div>);
    return(
    <div>
        {
        pokemon.map(poke=>
            <div>
                {poke}
            </div>
        )
        }

        <button onClick={()=>{
            setUrlPage(prevpage)
        }}>Previos</button>
         <button onClick={()=>{
             setUrlPage(nextpage)
        }}>Next</button>
    </div>
    )
}
export default PokemonList;