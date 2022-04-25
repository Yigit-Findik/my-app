import './App.css';
import {useEffect, useState} from 'react';
import "./styles.scss";
import { Route, Routes } from 'react-router-dom';

function Pokemonenemy() {
  const axios = require('axios').default;
  const [data, setData] = useState({});

  const fetchData = async () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 100) + "/")
    .then((res) => {setData(res.data)});

    // const result = await fetch("https://pokeapi.co/api/v2/pokemon/12");
    // const json = await result.json();
    console.log(data);
    // setData(json);
  }

  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
    // console.log(data);
    fetchData();
  },[]);



  return (
    <div className="enemypoke-container nes-container is-rounded">
        <div className='pull-right'>
            <h3 className='title'>{data.name}</h3>
            {/* {data.stats[0].base_stats ? (<p>{data.stats[0].base_stats}</p>) : (<p>Loading</p>)} */}
            {data.sprites ? (<img src={data.sprites.front_default}></img>) : (<p>Loading</p>)}
        </div>
    </div>
  );
}

export default Pokemonenemy;
