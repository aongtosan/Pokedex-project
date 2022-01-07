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
    const [selectPoke,setSelectPoke] = useState()
    const [indexImg,setIndexImg] = useState(0)
    const [loading,isLoading] = useState(true)
    const [previewImg,setPreviewImg] = useState("./images/loading.gif")
    const [pokeSummary,setPokeSummary] = useState("https://pokeapi.co/api/v2/pokemon/")
    useEffect(()=>{
        isLoading(true)
        let cancel
        axios.get(currentpage,{
            CancelToken : new axios.CancelToken(c=>cancel=c)
        }).then(res =>{
            isLoading(false)
            setPrevUrlPage(res.data.previous)
            setNextUrlPage(res.data.next)
            setPokemonProf(res.data.results.map(p=>[ p.name]))
        })
        return () => cancel()
    },[currentpage])
    if(loading) return(<div className="loading"> <img src="./images/loading.gif"/></div>);
    return(
    <div className="poke-show">
           <div className="data-group">
           {
            pokemonProf.map( (poke) =>
            
                <div className="data-row">
                    <button onClick={()=>{
                        setPreviewImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+( (pokemonProf.indexOf(poke) + ( 20 * indexImg) ) +1 )+".png")
                        setPokeSummary("https://pokeapi.co/api/v2/pokemon/"+poke[0])
                    }}>
                        <div className="col1">
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+( (pokemonProf.indexOf(poke) + ( 20 * indexImg) ) +1 )+".png"}/> 
                                <div>{poke[0]}</div> 
                            </div>  
                    </button> 
                </div>  
                
            )
            }
           </div>
            <div className='poke-preview'>
                <div className='poke-pic'>
                    <div>Image Area</div>
                    <img src={previewImg}/>
                    <div className='poke-summary'>
                        <button> <a href={pokeSummary}>Summary</a> </button>
                    </div>
                </div>
            </div>
            <button id="prevPage" onClick={()=>{
                if(prevpage==null){
                    setUrlPage("https://pokeapi.co/api/v2/pokemon") 
                    setIndexImg(0)
                } 
                else{
                    setUrlPage(prevpage)
                    setIndexImg(indexImg-1)
                }
            }}>Previous</button>
            <button id="nextPage" onClick={()=>{
                if(nextpage == null){
                    setUrlPage("https://pokeapi.co/api/v2/pokemon") 
                    setIndexImg(0)
                } 
                else{
                    setUrlPage(nextpage)
                    setIndexImg(indexImg+1)
                }
            }}>Next</button>
    </div>
    )
}
export default PokemonList;