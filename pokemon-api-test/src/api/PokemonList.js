import react from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import table from "../components/table.css"
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
            setPokemonProf(res.data.results.map(p=>[ p.name,p.url]))
        })
        return () => cancel()
    },[currentpage])
    if(loading) return(<div>Loading....</div>);
    return(
    <div className="table">
            {
            pokemonProf.map(poke=>
            <div className="data-row">
                <div className="col1">{poke[0]}</div> 
                <div className="col2">{poke[1]}</div> 
            </div> 
            )
            }

            <button id="prevPage" onClick={()=>{
                setUrlPage(prevpage)
            }}>Previous</button>
            <button id="nextPage" onClick={()=>{
                setUrlPage(nextpage)
            }}>Next</button>
    </div>
    )
}
export default PokemonList;