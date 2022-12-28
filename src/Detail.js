import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const[movieData, setMovieData] = useState([])
    
    // const {id} = useParams()

    const params = useParams().id
    console.log(params)
   

    const URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${params}`
    useEffect(()=>{
        fetch(URL)
        .then((res)=> res.json())
        .then(datas => setMovieData(datas.data.movie))
    },[])
    

    return (
    <div>
      <h1>{params}</h1>
      <img src={movieData.medium_cover_image} alt="" ></img>
    </div>
  )
}

export default Detail;
