import react from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import table from "../components/table.css"
function RegionList(props){
    const [pokemon,setPokemon] = useState([])
    const [regionProf,setRegionProf] = useState([])
    const [currentpage,setUrlPage] = useState("https://pokeapi.co/api/v2/region")
    const [loading,isLoading] = useState(true)
    useEffect(()=>{
        isLoading(true)
        let cancel
        axios.get(currentpage,{
            CancelToken : new axios.CancelToken(c=>cancel=c)
        }).then(res =>{
            isLoading(false)
            setRegionProf(res.data.results.map(p=>[ p.name,p.url]))
        })
        return () => cancel()
    },[currentpage])
    if(loading) return(<div>Loading....</div>);
    return(
    <div className="table">
            {
            regionProf.map(region=>
                
                <div className="row">{region[0]}</div>
            )
            }

    </div>
    )
}
export default RegionList;