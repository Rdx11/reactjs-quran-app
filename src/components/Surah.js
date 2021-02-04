import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Surah() {
  const [surahs, setSurahs] = useState([]);
  const getSurahs = async () => {
    try {
      let response = await axios.get(`https://al-quran-8d642.firebaseio.com/data.json?print=pretty`);
      setSurahs(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }
  
  function Card() {
    return (
      surahs.map((surah, index) => {
        return (
          <div className="cards" key={index}>
            <div className="card">
              <img src={process.env.PUBLIC_URL + "/Qimg.png"} alt="quran logo" className="logo"/>
              <div className="card-info">
                <NavLink to={`/detail/${surah.nomor}`}><h2>{surah.nama} ({surah.asma})</h2></NavLink>
                <p>Count of surah : {surah.ayat}</p>
                <p>Place: {surah.type}</p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  useEffect(() => {
    getSurahs()
  },[])
    
  return (
      <Card/>
  );
}

export default Surah;